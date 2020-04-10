import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-can-form-popup',
  templateUrl: './can-form-popup.component.html',
  styleUrls: ['./can-form-popup.component.css']
})
export class CanFormPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CanFormPopupComponent>,
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
