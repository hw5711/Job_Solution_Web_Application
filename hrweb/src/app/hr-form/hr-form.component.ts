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
  // secondFormGroup: FormGroup;
  // thirdFormGroup: FormGroup;

  constructor(
    private http: HttpClient,
    public route: ActivatedRoute,
    private loginService: LoginService,
    private router: Router,
    ) {}

  ngOnInit() {
    this.hr_id = this.loginService.getUserId();
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });

  }
  // update(form: NgForm){
  //   console.log(form.value.name);
  // }

  //save update 
    submit() {
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

      this.http
        .put("http://localhost:3000/hr-profile/update" + this.hr_id, req)
        .subscribe(response => {
          console.log("res is :", response);
        });

      this.router.navigate(["hr-profile"]);
    }



}
