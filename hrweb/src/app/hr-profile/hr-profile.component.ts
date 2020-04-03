import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { LoginService } from "../login/login.service";

@Component({
  selector: 'app-hr-profile',
  templateUrl: './hr-profile.component.html',
  styleUrls: ['./hr-profile.component.css']
})
export class HrProfileComponent implements OnInit {

  hr_id = "";
  firstName = "";
  lastName = "";
  phone = "";
  title = "";
  company = "";
  startDate = Date;
  note = "";
  contacts = "";

  constructor(
    private http: HttpClient,
    public route: ActivatedRoute,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.hr_id = this.loginService.getUserId();
  }
  
  getHrInfo(){
    //get default account default
      console.log("client side:", this.hr_id);
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

}
