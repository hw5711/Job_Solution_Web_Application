import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {ErrorStateMatcher} from '@angular/material/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router} from "@angular/router";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { LoginService } from "../login/login.service";
import { CanFormPopupComponent } from '../candidate-form/can-form-popup/can-form-popup.component';

export interface Education {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})

export class CandidateFormComponent implements OnInit {

  Educations: Education[] = [
    {value: 'Some College-0', viewValue: 'Some College'},
    {value: 'Juris Doctor-1', viewValue: 'Juris Doctor'},
    {value: 'Professional Designation', viewValue:'Professional Designation'},
    {value: 'Other', viewValue: 'Other'},
    {value: 'Masters', viewValue:'Masters'},
    {value: 'Honours Bachelors', viewValue:'Honours Bachelors'},
    {value: 'High School Diploma', viewValue:'High School Diploma'},
    {value: 'GED', viewValue:'GED'},
    {value: 'Doctorate', viewValue:'Doctorate'},
    {value: 'Diploma', viewValue:'Diploma'},
    {value: 'Certificate', viewValue:'Certificate'},
    {value: 'Bachelors', viewValue:'Bachelors'},
    {value: 'Associates', viewValue:'Associates'}
  ];


  enteredFirstName = "";
  enteredLastName = "";
  enteredTelephone = "";
  enteredEmail = "";
  enteredAddress = "";
  enteredJob = "";
  enteredCompany = "";
  enteredLocation = "";
  enteredFromDate = "";
  enteredToDate = "";
  enteredRole = "";
  enteredSchool = "";
  enteredEducationlevel = "";
  enteredStartDate = "";
  enteredEndDate = "";
  enteredMajor = "";
  enteredCertificate = "";
  enteredCertificateFrom = "";
  enteredExpirationDate = "";
  @Output() candidateCreated = new EventEmitter();

  selectedFile: File = null;
  can_id = "";
 /* //group 1
firstName = "";
  lastName = "  ";
  phone = "";
  company ="";
  //group 2
  starDate="";
  jobTitle="";
  comanyExp="";
  location="";
  //group 3
  educationDate="";
  //group 4
  date= ""; 

  isLinear = false;
  firstFormGroup = new FormGroup({
    firstName: new FormControl('', Validators.minLength(2)),
    lastName: new FormControl('', Validators.minLength(2)),
    phone: new FormControl('', Validators.minLength(10)),
  });
  secondFormGroup = new FormGroup({
    jobTitle: new FormControl('', Validators.minLength(40)),
    comanyExp: new FormControl('', Validators.minLength(40)),
    location: new FormControl('', Validators.minLength(40)),
  });
  thirdFormGroup = new FormGroup({
    educationDate: new FormControl('', Validators.minLength(40)),
  });

  forthFormGroup = new FormGroup({
    date: new FormControl('', Validators.minLength(40)),
  }); */


  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    public route: ActivatedRoute,
    private loginService: LoginService,
    public dialog: MatDialog
    ) {}

  ngOnInit() {
    this.can_id = this.loginService.getUserId();
    //this.getCanInfo();
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
    // this.thirdFormGroup = this._formBuilder.group({
    //   thirdCtrl: ['', Validators.required]
    // });
    // this.forthFormGroup = this._formBuilder.group({
    //   forthCtrl: ['', Validators.required]
    // });
  }
/*
  //get default 
  getCanInfo() {
    console.log("can id: ", this.can_id);
    let req = {
      can_num: this.can_id,
    }
    this.http
      .post<{ message: string; account: Account }>(
        "http://localhost:3000/cand-profile/get-profile", req)
      .subscribe(AccountData => {
        this.firstName = AccountData["fname"];
        this.lastName = AccountData["lname"];
        this.phone = AccountData["phone"];
      })
    this.firstFormGroup.value.firstName = this.firstName;
    this.firstFormGroup.value.lastName = this.lastName;
    this.firstFormGroup.value.phone = this.phone;
  } 

  //save update 
  SaveUpdate() {
    let req = {
      can_num: this.can_id,
      firstName: this.firstFormGroup.value.firstName,
      lastName: this.firstFormGroup.value.lastName,
      phone: this.firstFormGroup.value.phone,
    };

    console.log("update content is: " , req);
    this.http
      .post("http://localhost:3000/cand-profile/update", req)
      .subscribe(response => {
        console.log("res is :", response);
      });
    this.openDialog();
  } */

  onSaveUpdate()
  {
    const candidate = {
      firstName: this.enteredFirstName,
      lastName: this.enteredLastName,
      telephone: this.enteredTelephone,
      email: this.enteredEmail,
      address: this.enteredAddress,
      job: this.enteredJob,
      company: this.enteredCompany,
      location: this.enteredLocation,
      fromDate: this.enteredFromDate,
      toDate: this.enteredToDate,
      role: this.enteredRole,
      schoolname: this.enteredSchool,
      educationlevel: this.enteredEducationlevel,
      startdate: this.enteredStartDate,
      enddate: this.enteredEndDate,
      major: this.enteredMajor,
      certificate: this.enteredCertificate,
      certificatefrom: this.enteredCertificateFrom,
      expirationDate: this.enteredExpirationDate
    };
    this.candidateCreated.emit(candidate);

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CanFormPopupComponent, {
      width: '300px',
      height: '200px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  } 

  selectFile(event){
    this.selectedFile = <File>event.target.files[0];
  }

  uploadBotton(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http
      .post("http://localhost:3000/cand-profile/update-pic", fd)
      .subscribe(response => {
        console.log("res is :", response);
      });
  }


}

