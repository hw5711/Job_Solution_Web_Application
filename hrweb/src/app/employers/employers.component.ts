import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

import { LoginService } from "../login/login.service";

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {


  userId: string;
  firstName = "";
  lastName = "";
  title = "";
  company = "";
  contacts = "";
  searchResult: any;

  constructor(private http: HttpClient,
    public route: ActivatedRoute,
    private loginService: LoginService,) { }

  ngOnInit() {
    this.userId = this.loginService.getUserId()
    console.log("user_id is: " + this.userId)
    this.searchEmployers();
  }

  searchEmployers() {
    let req = {
      candidate_id: this.userId,
    };
    this.http
      .post<{ message: string; account: Account }>(
        "http://localhost:3000/hr/employers-contact", req)
        .subscribe(postData => {
          this.searchResult = postData;
          console.log("result is: ", this.searchResult);
        });
    }

}
