import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from "@angular/common/http";

import { LoginService } from "../../login/login.service";

export interface DialogData {
  job_id: string,
  jobTitle: string,
  job_company: string,
  jobType: string,
  location: string,
  industryType: string,
  jobDescription: string
}


@Component({
  selector: 'app-applications-popup',
  templateUrl: './applications-popup.component.html',
  styleUrls: ['./applications-popup.component.css']
})
export class ApplicationsPopupComponent implements OnInit {

  status: string;
  userId: string;
  jobInfo : any;

  title: string;
  company: string;
  jobType: string;
  expirationDate: Date;
  location: string;
  industryType: string;
  hr_id: string;
  jobDescription: string;

  constructor( 
    public dialogRef: MatDialogRef<ApplicationsPopupComponent>,
    private http: HttpClient,
    private loginService: LoginService,
    //private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.userId = this.loginService.getUserId()
    console.log("user_id is: " + this.userId)
    this.checkJobInfo();
    this.company = this.data.job_company;
    this.title =  this.data.jobTitle;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  //to check job info 
  checkJobInfo(){
    let req = {
    job_id: this.data.job_id,
    candidate_id: this.userId
    }
  this.http
    .post("http://localhost:3000/jobappform/apply/applied_jobinfo", req)
    .subscribe(postData => {
      this.jobInfo = postData;
      for (var i = 0; i < this.jobInfo.candidate.length; i++){
        if (this.jobInfo.candidate[i].candidate_id == this.userId){
          this.status = this.jobInfo.candidate[i].status;
        }
      }
    });
  }


}
