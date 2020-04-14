import { Component, Inject, OnInit } from '@angular/core'; 
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

import { LoginService } from "../../login/login.service";
import { JobService } from "../job.service";

export interface DialogData {
  jobTitle: string,
  jobType: string,
  location: string,
  industryType: string,
  company: string,
  jobDescription: string
}

@Component({
  selector: 'app-jobspage-popup',
  templateUrl: './jobspage-popup.component.html',
  styleUrls: ['./jobspage-popup.component.css']
})
export class JobspagePopupComponent implements OnInit {
  select: boolean;
  status = 'Enable';
  toggle = true;
  //userId: string;
  can_id = "";
  can_email = "";
  job_id = "";
  job_title = "";
  job_company = "";
  job_type = "";
  job_industryType= "";
  job_description= "";
  job_location= "";
  job_expirationDate= "";

  constructor(
    public dialogRef: MatDialogRef<JobspagePopupComponent>,
    private loginService: LoginService,
    private jobService: JobService,
    private http: HttpClient,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) 
    public data: DialogData
    ) {
    }
 
  ngOnInit() {
    this.select = false;
    this.can_id = this.loginService.getUserId();
    this.can_email  = this.loginService.getUserEmail(); // by sharmi for getting the user email --> still not working
    this.job_id = this.jobService.getJobId();
    this.job_title = this.jobService.getJobTitle();
    // this.job_company = this.jobService.getJobCompany();
    // this.job_type = this.jobService.getJobType();
    // this.job_industryType = this.jobService.getJobIndustryType();
    // this.job_description = this.jobService.getJobDescription();
    // this.job_location = this.jobService.getJobLocation();
    // this.job_expirationDate = this.jobService.getJobExpirationDate();
/*
    console.log("candidate email is: ", this.can_email);
    console.log("job id is:", this.job_id);
    console.log("title is:", this.job_title);
    console.log("company is:" , this.job_company);
    console.log("job type is:", this.job_type);
    console.log("industry is:", this.job_industryType);
    console.log("description is:" , this.job_description);
    console.log("location is:" , this.job_location);
    console.log("expirationDate is:" , this.job_expirationDate); */
    //this.userId = this.loginService.getUserId()
    //console.log("user_id is: " + this.userId)
  }
 
  onNoClick(): void {
    this.dialogRef.close();
  }

  addFav(){
    //write fuction to change the icon to filled icon, then add the job id and details in candidate's fav list
    this.select = !this.select;
    this.enableDisableRule();

    let reqs = {
      can_id: this.can_id,
      job_id: this.job_id,
      job_title: this.jobService.getJobTitle()
    }; 
    console.log("reqs: " + reqs);
     this.http
       .post("http://localhost:3000/jobappform/fav_job", reqs)
       .subscribe(response => {
         console.log("res is :", response);
       });
  }

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }



}








