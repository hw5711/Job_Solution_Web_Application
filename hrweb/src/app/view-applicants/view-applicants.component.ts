import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginService } from "../login/login.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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

}
