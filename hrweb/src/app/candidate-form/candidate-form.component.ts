import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {ErrorStateMatcher} from '@angular/material/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { LoginService } from "../login/login.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CanFormPopupComponent } from '../candidate-form/can-form-popup/can-form-popup.component';


@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;

  can_id = "";
  firstName = "";
  lastName = "";
  phone = "";


  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    public route: ActivatedRoute,
    private loginService: LoginService,
    public dialog: MatDialog
    ) {}

  ngOnInit() {
    this.can_id = this.loginService.getUserId();
    this.getCanInfo();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.forthFormGroup = this._formBuilder.group({
      forthCtrl: ['', Validators.required]
    });
  }

  save(){
    let req ={

    }
  }

  //get default 
  getCanInfo() {
    this.http
      .get<{ message: string; account: Account }>(
        "http://localhost:3000/cand-profile/" + this.can_id)
      .subscribe(AccountData => {
        console.log("HR info", AccountData);
        this.firstName = AccountData["fname"];
        this.lastName = AccountData["lname"];
        this.phone = AccountData["phone"];
      })
  }

  //save update 
  SaveUpdate() {
    let req = {
      can_id: this.can_id,
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
    };
    console.log(req);
    this.http
      .put("http://localhost:3000/cand-profile/update/" + this.can_id, req)
      .subscribe(response => {
        // console.log("res is :", response);
      });
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CanFormPopupComponent, {
      width: '300px',
      height: '200px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  } 


}

