import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

import { ApplicationsPopupComponent } from './applications-popup/applications-popup.component';
import { LoginService } from "../login/login.service";

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
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  //found = false;
  jobTitle: any;
  jobType: any;
  location: any;
  industryType: any;
  job: any;
  jobDescription: any;
  userId: string;
  appResult: any;

  constructor(private http: HttpClient,
    public route: ActivatedRoute,
    private loginService: LoginService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.userId = this.loginService.getUserId()
    console.log("user_id is: " + this.userId)
    this.searchAppliedJob();
  }

  searchAppliedJob() {
    let req = {
      candidate_id: this.userId,
    };
    this.http
      .post("http://localhost:3000/jobappform/app-job-history", req)
      .subscribe(postData => {
        this.appResult = postData;
        console.log("result is: ", this.appResult);
      });
  }

  openDialog(j): void {
    console.log("j is: ",j);
    const dialogRef = this.dialog.open(ApplicationsPopupComponent, {
      width: 'auto',
      height: 'auto',
      data: { 
        job_id : j.job_id,
        jobTitle: j.job_title, 
        job_company: j.job_company, 
        jobType: j.job_type, 
        location: j.job_location, 
        industryType: j.job_industryType, 
        jobDescription: j.job_description,
        job_expirationDate: j.job_expirationDate,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }  

}
