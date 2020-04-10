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
  selectedFile: File = null;
  can_id = "";
  //group 1
  firstName = "";
  lastName = "";
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
  });


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

