import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginService } from "../login/login.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ViewPopupComponent} from './view-popup/view-popup.component';


export interface DialogData {
  candidate_num: string,
  firstName: string,
  lastName: string,
  telephone: string,
  email: string,
  address: string,
  address2: string,
  city: string,
  state: string,
  zipcode: string,
  job: string,
  company: string,
  location: string,
  fromDate: string,
  toDate: string,
  role: string,
  schoolname: string,
  educationlevel: string,
  startdate: string,
  enddate: string,
  major: string,
  cumulativegpa: string,
  skills: string,
  accomplishments: string,
  sponsership: string,
  acknowledgment: string,
  gender: string,
  hispanic: string,
  veteran: string,
  disability: string
}

@Component({
  selector: 'app-view-applicants',
  templateUrl: './view-applicants.component.html',
  styleUrls: ['./view-applicants.component.css']
})
export class ViewApplicantsComponent {
  panelOpenState = false;
  hrId: string;
  searchResault: any;

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

  searchPostedJobs() {
    let req = {
      hr_id: this.hrId,
    };
    this.http
      .post("http://localhost:3000/hr/posted_job", req)
      .subscribe(postData => {
        this.searchResault = postData;
        console.log(this.searchResault[0]);
        console.log(this.searchResault.length);
      });
  }

  viewCanAppForm(j) {

  
    let req = {
      candidate_num: j.candidate_num
    };
    this.http
      .post("http://localhost:3000/hr/posted_job", req)
      .subscribe(postData => {
        this.searchResault = postData;
        console.log(this.searchResault[0]);
        console.log(this.searchResault.length);
      });

    this.openDialog(this.searchResault);

  }

  openDialog(j): void {

    const dialogRef = this.dialog.open(ViewPopupComponent, {
      width: '800px',
      height: '800px',
      data: { 
        candidate_num: j.candidate_num,
        firstName: j.firstName,
        lastName: j.lastName,
        telephone: j.telephone,
        email: j.email,
        address: j.address,
        address2: j.address2,
        city: j.city,
        state: j.state,
        zipcode: j.zipcode,
        job: j.job,
        company: j.company,
        location: j.location,
        fromDate: j.fromDate,
        toDate: j.toDate,
        role: j.role,
        schoolname: j.schoolname,
        educationlevel: j.educationlevel,
        startdate: j.startdate,
        enddate: j.enddate,
        major: j.major,
        cumulativegpa: j.cumulativegpa,
        skills: j.skills,
        accomplishments: j.accomplishments,
        sponsership: j.sponsership,
        acknowledgment: j.acknowledgment,
        gender: j.gender,
        hispanic: j.hispanic,
        veteran: j.veteran,
        disability: j.disability
      
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  } 
}
