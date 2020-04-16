import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { LoginService } from "../../login/login.service";

export interface DialogData {
  jobTitle: string,
  job_id: string,
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
 // appResult: any;
 jobInfo : any;

  title: String;
  company: String;
  jobType: String;
  expirationDate: Date;
  location: String;
  industryType: String;
  hr_id : String;
  jobDescription: String;

  constructor( public dialogRef: MatDialogRef<ApplicationsPopupComponent>,
    private loginService: LoginService,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.userId = this.loginService.getUserId()
    console.log("user_id is: " + this.userId)
    this.checkJobInfo();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  //to check job info 
  checkJobInfo(){

    let req = {
    job_id: this.data.job_id,
    }
  this.http
    .post("http://localhost:3000/jobappform/apply/applied_jobinfo", req)
    .subscribe(postData => {
      this.jobInfo = postData;
      this.title = this.jobInfo.title;
      this.company = this.jobInfo.company;
      this.jobType = this.jobInfo.jobType;
      this.expirationDate = this.jobInfo.expirationDate;
      this.location = this.jobInfo.location;
      this.industryType = this.jobInfo.industryType;
      this.hr_id = this.jobInfo.hr_id;
      this.jobDescription = this.jobInfo.jobDescription;
      // console.log(this.jobInfo);
      // console.log(this.jobInfo.jobDescription);
    });
  }


}
