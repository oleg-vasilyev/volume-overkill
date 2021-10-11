import { Component, ElementRef, ViewChild } from '@angular/core';

import html2canvas from 'html2canvas';
import { VolumeComponent } from './volume/volume.component';
import * as Tesseract from 'tesseract.js';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(VolumeComponent, { read: ElementRef })
  public volumeComponentRef!: ElementRef;

  public isLoading = false;

  public constructor(private _snackBar: MatSnackBar) { }

  public async clickHandler(): Promise<void> {
    this.isLoading = true;

    const canvas = await html2canvas(this.volumeComponentRef.nativeElement);

    const worker = Tesseract.createWorker();

    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    await worker.setParameters({ tessedit_char_whitelist: '0123456789' });
    const { data } = await worker.recognize(canvas);

    await worker.terminate();

    this.isLoading = false;

    if (data.blocks.length) {
      this._snackBar.open(`The sound level is set to ${data.text}%`, 'Ok');
    } else {
      this._snackBar.open('Number is not recognized, try harder!', 'Sure...');
    }
  }
}
