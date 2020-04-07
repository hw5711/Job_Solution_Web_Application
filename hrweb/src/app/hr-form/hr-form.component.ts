import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginService } from "../login/login.service";
// import {FormControl, FormGroupDirective, NgForm, FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
// import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-hr-form',
  templateUrl: './hr-form.component.html',
  styleUrls: ['./hr-form.component.css']
})
export class HrFormComponent implements OnInit {


  hr_id = "";
  firstName = "";
  lastName = "";
  phone = "";
  title = "";
  company = "";
  startDate = "";
  note = "";
  contacts = "";

  isLinear = false;

  constructor(
    private http: HttpClient,
    public route: ActivatedRoute,
    private loginService: LoginService,
    private router: Router,
    ) {}

  ngOnInit() {
    this.hr_id = this.loginService.getUserId();
    this.getHrInfo();
  }
  //get default info
  getHrInfo() {
    // console.log("client side:", this.hr_id);
    this.http
      .get<{ message: string; account: Account }>(
        "http://localhost:3000/hr-profile/" + this.hr_id)
      .subscribe(AccountData => {
        this.firstName = AccountData["firstName"];
        this.lastName = AccountData["lastName"];
        this.phone = AccountData["phone"];
        this.title = AccountData["title"];
        this.company = AccountData["company"];
        this.startDate = AccountData["startDate"];
        this.note = AccountData["note"];
        this.contacts = AccountData["contacts"];
      })
  }
  //save update 
    SaveUpdate(){
      console.log("save!");
      let req = {
        hr_id: this.hr_id,
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phone,
        title: this.title,
        company: this.company,
        startDate: this.startDate,
        note: this.note,
        contacts: this.contacts
      };
      console.log(req);
      this.http
        .post("http://localhost:3000/hr-profile/update/", req)
        .subscribe(response => {
          console.log("res is :", response);
        });

      this.router.navigate(["/hr-profile"]);
    }



}
