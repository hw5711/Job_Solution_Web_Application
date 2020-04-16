import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

import { MyfavjobPopupComponent } from './myfavjob-popup/myfavjob-popup.component';
import { LoginService } from "../login/login.service";
import { JobService } from "../jobspage/job.service";

export interface DialogData {
  job_title: string,
  job_id: string
}

@Component({
  selector: 'app-myfavjob',
  templateUrl: './myfavjob.component.html',
  styleUrls: ['./myfavjob.component.css']
})
export class MyfavjobComponent implements OnInit {
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
  favResult: any;
  id_array: any;
  searchResault: any;
  jobTitles: [];

  constructor( private http: HttpClient,
    private loginService: LoginService,
    private jobService: JobService,
    public route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.userId = this.loginService.getUserId()
    // console.log("user_id is: " + this.userId)
    this.searchFavJob();
  }

  searchFavJob()
  {
    let req = {
      can: this.userId,
    };
    this.http
      .post("http://localhost:3000/jobappform/apply/fav_job", req)
      .subscribe(postData => {
        this.searchResault = postData;
        this.id_array = this.searchResault[0].job_id_array;
        // console.log(this.searchResault);
        // console.log(this.id_array);
      });

      console.log("id: " + this.id_array);
  }

  
//sharmi test
  applyJob(j){
    // console.log("j: "+ j);
    this.jobService.setJobId(j.job_id);
    this.jobService.setJobTitle(j.title);
    this.jobService.setJobCompany(j.company);
    this.jobService.setJobType(j.jobType);
    this.jobService.setJobLocation(j.location);
    this.jobService.setJobDescription(j.description);
    this.jobService.setJobIndustryType(j.industryType);
    this.jobService.setJobExpirationDate(j.expirationDate);
  } //sharmi

  openDialog(j): void {
    const dialogRef = this.dialog.open(MyfavjobPopupComponent, {
      width: 'auto',
      height: 'auto',
      data: { 
        job_id: j.job_id, 
        jobTitle: j.job_title, 
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  } 

}
