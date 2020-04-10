import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginService } from "../login/login.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { EditPopupComponent } from './edit-popup/edit-popup.component';


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
  selector: 'app-view-posting',
  templateUrl: './view-posting.component.html',
  styleUrls: ['./view-posting.component.css']
})

export class ViewPostingComponent implements OnInit{

  panelOpenState = false;
  hrId: string;
  job_id : string;
  count : number;
  searchResault: any;
  status = 'Enable';
  toggle = true;
  changed: boolean;

  title: string;
  jobType: string;
  location: string;
  industryType: string;
  company: string;
  jobDescription: string;
  startDate: Date;
  expirationDate: Date

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.hrId = this.loginService.getUserId()
    console.log("hr_id is: " + this.hrId)
    this.searchPostedJobs();
  }

  searchPostedJobs(){
    let req = {
      hr_id: this.hrId,
    };
    this.http
      .post("http://localhost:3000/hr/posted_job", req)
      .subscribe(postData => {
        this.searchResault = postData;
        this.count = this.searchResault.length;
        // console.log(this.searchResault[0]);
        console.log("total posted jobs: ",this.searchResault.length);
        });
  }

  delete(job){
    let req ={
      job_id: job.job_id,
    }
    // console.log(req);
    this.http
      .post("http://localhost:3000/hr/delete_job", req)
      .subscribe(response => {
        console.log("job delete successed: ", response);
      });
  }


  openDialog(j): void {
    this.changed = true;
    const dialogRef = this.dialog.open(EditPopupComponent, {
      width: '800px',
      height: '600px',
      data: {title: j.title, company: j.company, jobType: j.jobType, location: j.location, industryType: j.industryType, jobDescription: j.jobDescription, changed: this.changed }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        // console.log('The dialog was closed: ', result);
        this.title = result.title;
        this.jobType =  result.jobType;
        this.location =  result.location;
        this.industryType = result.industryType;
        this.company = result.company;
        this.jobDescription = result.jobDescription;
        this.updateJob();
      }
    });
  } 

  update(j){
    this.openDialog(j);
  }

  updateJob(){
    let req = {
      hr_id : this.hrId,
      job_id: this.job_id,
      title: this.title,
      jobType: this.jobType,
      company: this.company,
      location: this.location,
      industryType: this.industryType,
      startDate: this.startDate,
      expirationDate: this.expirationDate,
      jobDescription: this.jobDescription,
      candidate: this.searchResault.candidate,
    };

    this.http
      .post("http://localhost:3000/hr/update_job", req)
      .subscribe(response => {
        console.log("job update successed: ", response);
      });

  }

}
