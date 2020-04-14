import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

import { MyfavjobPopupComponent } from './myfavjob-popup/myfavjob-popup.component';
import { LoginService } from "../login/login.service";


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
      
      //view


  }

  view(j){
    
    let req = {
      job_id: j.job_id,
    }
    this.http
      .post("http://localhost:3000/jobappform/apply/fav_job", req)
      .subscribe(postData => {
        this.job = postData;
        console.log(this.job);
      });
  }


  
  openDialog(j): void {
    const dialogRef = this.dialog.open(MyfavjobPopupComponent, {
      width: 'auto',
      height: 'auto',
      data: { jobTitle: j.title, 
        company: j.company, 
        jobType: j.jobType, 
        location: j.location, 
        industryType: j.industryType, 
        jobDescription: j.jobDescription}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  } 

}
