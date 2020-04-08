import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginService } from "../login/login.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-view-posting',
  templateUrl: './view-posting.component.html',
  styleUrls: ['./view-posting.component.css']
})

export class ViewPostingComponent {

  panelOpenState = false;
  hrId: string;
  job_id : string;
  count : number;
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
        this.count = this.searchResault.length;
        // console.log(this.searchResault[0]);
        console.log("total posted jobs: ",this.searchResault.length);
        });
  }

  delete(job){
    let req ={
      job_id: job.job_id,
    }
    console.log(req);
    this.http
      .post("http://localhost:3000/hr/delete_job", req)
      .subscribe(response => {
        console.log("job delete successed: ", response);
      });
  }
  
}
