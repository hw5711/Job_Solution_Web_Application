import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginService } from "../login/login.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export class JobInfo{
    job_id: string;
    hr_id: string;
    company: string;
    title: string;
    startDate: Date;
    expirationDate: Date;
    jobDescription: string;
    industryType: string;
    jobType: string;
    location: string;
    candidate: [{
      candidate_id: string,
      rank: number,
      applyDate: Date,
    }]
}

@Component({
  selector: 'app-view-posting',
  templateUrl: './view-posting.component.html',
  styleUrls: ['./view-posting.component.css']
})

export class ViewPostingComponent {

  panelOpenState = false;
  hrId: string;

  searchResault: any;

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
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
        console.log(this.searchResault[0]);
        console.log(this.searchResault.length);
        });
  }
  
}
