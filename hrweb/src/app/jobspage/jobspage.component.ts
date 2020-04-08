import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

import { JobspagePopupComponent } from './jobspage-popup/jobspage-popup.component';
import { LoginService } from "../login/login.service";
import { JobService } from "./job.service";

interface josbtype {
  value: string;
  viewValue: string;
}

interface location {
  value: string;
  viewValue: string;
}

interface industry {
  value: string;
  viewValue: string;
}
//If you have data passed from dialog
export interface DialogData {
  jobTitle: string,
  jobType: string,
  location: string,
  industryType: string,
  company: string
}

@Component({
  selector: 'app-jobspage',
  templateUrl: './jobspage.component.html',
  styleUrls: ['./jobspage.component.css']
})
export class JobspageComponent implements OnInit {

  jobtypes: josbtype[] = [
    {value: 'Internship', viewValue: 'Internship'},
    {value: 'Co-op', viewValue: 'Co-op'},
    {value: 'Full Time', viewValue: 'Full Time'},
    {value: 'Part Time', viewValue: 'Part Time'}
  ];
  
  locations: location[] = [
    {value: 'Alabama', viewValue: 'Alabama'},
    {value:  'Alaska', viewValue: 'Alaska'},
    {value:  'Arizona', viewValue: 'Arizona'},
    {value:  'Arkansas', viewValue: 'Arkansas'},
    {value:  'California', viewValue: 'California'},
    {value: 'Colorado', viewValue: 'Colorado'},
    {value:  'Connecticut', viewValue: 'Connecticut'},
    {value:  'Delaware', viewValue: 'Delaware'},
    {value:  'Florida', viewValue: 'Florida'},
    {value:  'Georgia', viewValue: 'Georgia'},
    {value:  'Hawaii', viewValue: 'Hawaii'},
    {value:  'Idaho', viewValue: 'Idaho'},
    {value:  'Illinois', viewValue: 'Illinois'},
    {value: 'Indiana', viewValue: 'Indiana'},
    {value:  'Iowa', viewValue: 'Iowa'},
    {value:  'Kansas', viewValue: 'kanas'},
    {value:  'Kentucky', viewValue: 'Kentucky'},
    {value:  'Louisiana', viewValue: 'Louisiana'},
    {value:  'Maine', viewValue: 'Maine'},
    {value:  'Maryland', viewValue: 'Maryland'},
    {value:  'Massachusetts', viewValue: 'Massachusette' },
    {value: 'Michigan', viewValue: 'Michigan'},
    {value:  'Minnesota', viewValue: 'Minnesota'},
    {value:  'Mississippi', viewValue: 'Mississippi'},
    {value:  'Missouri', viewValue: 'Missouri'},
    {value:  'Montana', viewValue: 'Montana'},
    {value:  'Nebraska', viewValue: 'Nebraska'},
    {value:  'Nevada', viewValue: 'Neveda'},
    {value: 'New Hampshire', viewValue: 'New Hampshire'}, 
    {value:  'New Jersey', viewValue: 'New Jersey'},
    {value:  'New Mexico', viewValue: 'New Mexico'},
    {value:  'New York', viewValue: 'New York'},
    {value:  'North Carolina', viewValue: 'North Carolina'},
    {value:  'North Dakota', viewValue: 'North Dakota'},
    {value: 'Ohio', viewValue: 'Ohio'},
    {value:  'Oklahoma', viewValue: 'Oklahoma'},
    {value:  'Oregon', viewValue: 'Oregon'},
    {value:  'Pennsylvania', viewValue: 'Pennsylvania'},
    {value:  'Rhode Island', viewValue: 'Rhode Island'},
    {value:  'South Carolina', viewValue: 'South Carolina'},
    {value:  'South Dakota', viewValue: 'South Dakota'},
    {value: 'Tennessee', viewValue: 'Tennessee'},
    {value:  'Texas', viewValue: 'Texas'},
    {value:  'Utah', viewValue: 'Utah'},
    {value:  'Vermont', viewValue: 'Vermont'},
    {value:  'Virginia', viewValue: 'Virginia'},
    {value:  'Washington', viewValue: 'Washington'},
    {value:  'West Virginia', viewValue: 'West Viriginia'},
    {value:  'Wisconsin', viewValue: 'Wisconsin'},
    {value:  'Wyoming', viewValue: 'Wyoming'}
  ];

  industries: industry[] = [
    {value: 'Financial Service', viewValue: 'Financial Service'},
    {value: 'Accounting', viewValue: 'Accounting'},
    {value: 'Manufacturing', viewValue: 'Manufacturing'},
    {value: 'Real estate/ Construction', viewValue: 'Real estate/Construction'},
    {value: 'Marketing/Advertising/PR', viewValue: 'Marketing/Advertising/PR'},
    {value: 'Government/Education', viewValue: 'Government/Education'},
    {value: 'Consulting', viewValue: 'Consulting'},
    {value: 'Pharma/Biotech', viewValue: 'Pharma/Biotech'},
    {value: 'Technology/Science', viewValue: 'Technology/Science'},
    {value: 'Healthcare', viewValue: 'Healthcare'},
    {value: 'Aerospace', viewValue: 'Aerospace'},
    {value: 'Legal', viewValue: 'Legal'},
    {value: 'Transportation/Logistics', viewValue: 'Transportation/Logistics'},
    {value: 'Energy', viewValue: 'Energy'},
    {value: 'Sports/leisure', viewValue: 'Sports/leisure'},
    {value: 'Others', viewValue: 'Others'}
  ];

  enteredjobTitle = "";
  enteredjobType = "";
  enteredlocation = "";
  enteredindustryType = "";
  enteredcompany = "";
  enteredjobDescription = "";

  //found = false;
  jobTitle: any;
  jobType: any;
  location: any;
  industryType: any;
  job: any;
  jobDescription: any;
  userId: string;

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private jobService: JobService,
    public route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.userId = this.loginService.getUserId()
    console.log("user_id is: " + this.userId)
  }

  searchJob(form: NgForm) {
    //console.log(this.enteredjobTitle)
    let req = { 
      jobTitle: this.enteredjobTitle, 
      jobType: this.enteredjobType, 
      location: this.enteredlocation, 
      industryType: this.enteredindustryType
    };
    //console.log("front end :" , req);
    this.http
      .post("http://localhost:3000/searchjob", req)
      .subscribe(postData => {
        this.job = postData;
        console.log(this.job);
      });

    console.log("the search function will return the job_id, so you can use it in the application form submit");
  }

  applyJob(j){
    this.jobService.setJobId(j.job_id);
    this.jobService.setJobTitle(j.title);
  }

  openDialog(j): void {
    const dialogRef = this.dialog.open(JobspagePopupComponent, {
      width: 'auto',
      height: 'auto',
      data: { jobTitle: j.jobTitle, company: j.company, jobType: j.jobType, location: j.location, industryType: j.industryType, jobDescription: j.jobDescription}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  } 

  //need to be removed later -- just for data entry //

  createPeople(form: NgForm){
    let req = { 
      jobTitle: this.enteredjobTitle, 
      jobType: this.enteredjobType, 
      location: this.enteredlocation, 
      industryType: this.enteredindustryType,
      company: this.enteredcompany, 
      jobDescription: this.enteredjobDescription,
      startDate: null,
      expirationDate: null,
      candidate: null,
    };
    
    this.http
      .post("http://localhost:3000/searchjob/create", req)
      .subscribe(response => {
        console.log("book post successed: ", response);
      });
  }
}


