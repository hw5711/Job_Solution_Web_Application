import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { LoginService } from "../login/login.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cand-profile',
  templateUrl: './cand-profile.component.html',
  styleUrls: ['./cand-profile.component.css']
})
export class CandProfileComponent implements OnInit {

  can_id = "";
  firstName = "";
  lastName = "";
  telephone = "";
  //note = "";
  //contacts = "";
  email = "";
  job = "";
  company = "";
  location = "";
  fromDate = "";
  toDate = "";
  role = "";
  schoolname = "";
  educationlevel = "";
  startdate = "";
  enddate = "";
  major = "";
  certificate = "";
  certificatefrom = "";
  expirationDate = "";

  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    public route: ActivatedRoute,
    private loginService: LoginService
    ) {}

  ngOnInit() {
    this.can_id = this.loginService.getUserId();
    this.getCanInfo();
  }

  getCanInfo() {
    let req ={
      can_num : this.can_id,
    }
    this.http
      .post<{ message: string; account: Account }>(
        "http://localhost:3000/cand-profile/get-profile" , req)
      .subscribe(AccountData => {
        // console.log("Candidate info", AccountData);
        this.firstName = AccountData["firstName"];
        this.lastName = AccountData["lastName"];
        this.telephone = AccountData["telephone"];
        this.email = AccountData["email"];
        this.job = AccountData["job"];
        this.company = AccountData["company"];
        this.location = AccountData["location"];
        this.fromDate = AccountData["fromDate"];
        this.toDate = AccountData["toDate"];
        this.role = AccountData["role"];
        this.schoolname = AccountData["schoolname"];
        this.educationlevel = AccountData["educationlevel"];
        this.startdate = AccountData["startdate"];
        this.enddate = AccountData["enddate"];
        this.major = AccountData["major"];
        this.certificate = AccountData["certificate"];
        this.certificatefrom = AccountData["certificatefrom"];
        this.expirationDate = AccountData["expirationDate"];
      })
  }

  
  
}
