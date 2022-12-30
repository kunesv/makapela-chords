import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Song } from '../song/song';

@Component({
  selector: 'app-song-dialog',
  templateUrl: './song-dialog.component.html',
  styleUrls: ['./song-dialog.component.css']
})
export class SongDialogComponent {
  constructor(public dialogRef: MatDialogRef<SongDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Song) { }

  ngAfterViewInit() {

    setTimeout(() => {
      let container = document.querySelector(".dialog-container");
      console.log(container)
      if (container) {
        container.scrollTop = 100;
      }
    }, 100)

  }

}
