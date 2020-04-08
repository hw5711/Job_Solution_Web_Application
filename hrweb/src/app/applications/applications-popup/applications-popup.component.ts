import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { LoginService } from "../../login/login.service";

export interface DialogData {
  jobTitle: string,
  jobType: string,
  location: string,
  industryType: string,
  company: string,
  jobDescription: string
}


@Component({
  selector: 'app-applications-popup',
  templateUrl: './applications-popup.component.html',
  styleUrls: ['./applications-popup.component.css']
})
export class ApplicationsPopupComponent implements OnInit {

  userId: string;

  constructor( public dialogRef: MatDialogRef<ApplicationsPopupComponent>,private loginService: LoginService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.userId = this.loginService.getUserId()
    console.log("user_id is: " + this.userId)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
