import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from "@angular/common/http";

import { LoginService } from "../../login/login.service";

export interface DialogData {
  job_id: string,
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
 // appResult: any;

  constructor( 
    public dialogRef: MatDialogRef<ApplicationsPopupComponent>,
    private http: HttpClient,
    private loginService: LoginService,
   // private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.userId = this.loginService.getUserId()
    console.log("user_id is: " + this.userId)
    this.checkStatus();
    }

  checkStatus(){
    let req ={
      job_id: this.data.job_id,
      candidate_id: this.userId
    }
    this.http
      .post("http://localhost:3000/hr/posted_job/apply-history", req)
      .subscribe(postData => {
        console.log("get status of applied job:", postData);
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
