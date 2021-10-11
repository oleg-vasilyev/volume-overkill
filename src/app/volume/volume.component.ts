import { Component } from '@angular/core';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.scss']
})
export class VolumeComponent {

  public readonly MODEL = [
    new Array(4).fill(null).map((_, i) => `dot-1_${i + 1}`),
    new Array(4).fill(null).map((_, i) => `dot-2_${i + 1}`),
    new Array(6).fill(null).map((_, i) => `dot-3_${i + 1}`),
    new Array(8).fill(null).map((_, i) => `dot-4_${i + 1}`),
    new Array(10).fill(null).map((_, i) => `dot-5_${i + 1}`),
    new Array(12).fill(null).map((_, i) => `dot-6_${i + 1}`),
    new Array(6).fill(null).map((_, i) => `wave-dot-1_${i + 1}`),
  ]
}
