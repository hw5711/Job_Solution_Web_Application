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
  phone = "";
  note = "";
  contacts = "";

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
    console.log("can id: ", this.can_id);
    this.http
      .get<{ message: string; account: Account }>(
        "http://localhost:3000/cand-profile/" + this.can_id)
      .subscribe(AccountData => {
        console.log("Candidate info", AccountData);
        this.firstName = AccountData["fname"];
        this.lastName = AccountData["lname"];
        this.phone = AccountData["phone"];
      })
  }
  
}
