import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

import { ApplicationsPopupComponent } from './applications-popup/applications-popup.component';
import { LoginService } from "../login/login.service";

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
      .post("http://localhost:3000/jobappform/apply/applied_job", req)
      .subscribe(postData => {

        this.appResult = postData;
        console.log("app history is:" ,this.appResult);
        // console.log(this.appResult.length);
      });
  }

  openDialog(j): void {
    const dialogRef = this.dialog.open(ApplicationsPopupComponent, {
      width: 'auto',
      height: 'auto',
      data: { jobTitle: j.title, 
        job_id: j.job_id, 
       // company: j.company, 
       // jobType: j.jobType, 
        //location: j.location, 
        //industryType: j.industryType, 
        //jobDescription: j.jobDescription,
        //job_expirationDate: j.job_expirationDate,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }  

}
