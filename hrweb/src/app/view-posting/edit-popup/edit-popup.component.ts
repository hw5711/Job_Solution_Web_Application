import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { LoginService } from "../../login/login.service";

export interface DialogData {
  title: string,
  jobType: string,
  location: string,
  industryType: string,
  company: string,
  jobDescription: string,
  changed: boolean,
  startDate: Date,
  expirationDate: Date
}

@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.css']
})
export class EditPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditPopupComponent>,
    private loginService: LoginService,
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData
  ) { }

  ngOnInit() {
    console.log(this.data.changed);
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  // update(){
  //   // data.changed = true;
  //   this.onNoClick();
  // }

}
