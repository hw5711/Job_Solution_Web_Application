import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-hrprofile-popup',
  templateUrl: './hrprofile-popup.component.html',
  styleUrls: ['./hrprofile-popup.component.css']
})
export class HrprofilePopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<HrprofilePopupComponent>, 
    ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
