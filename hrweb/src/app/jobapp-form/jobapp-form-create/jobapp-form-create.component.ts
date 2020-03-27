import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {ErrorStateMatcher} from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

interface Education {
  value: string;
  viewValue: string;
}

interface Choice {
  value: string;
  viewValue: string;
}

interface Gender {
  value: string;
  viewValue: string;
}

interface Veteran {
  value: string;
  viewValue: string;
}

interface Disability {
  value: string;
  viewValue: string;
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-jobapp-form-create',
  templateUrl: './jobapp-form-create.component.html',
  styleUrls: ['./jobapp-form-create.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class JobappFormCreateComponent implements OnInit {


  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;



  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  sponsers: Choice[] = [
    {value: 'Yes-0', viewValue: 'Yes'},
    {value: 'No-1', viewValue: 'No'}
  ];


  genders: Gender[] = [
    {value: 'Male-0', viewValue: 'Male'},
    {value: 'Female-1', viewValue: 'Female'},
    {value: 'Prefer Not to disclose-2', viewValue: 'Prefer Not to disclose'}
  ];

  veterans: Veteran[] = [
    {value: 'I am not a veteran-0', viewValue: 'I am not a veteran'},
    {value: 'Recently separated veteran-1', viewValue: 'Recently separated veteran'},
    {value: 'Disabled veteran-2', viewValue: 'Disabled veteran'},
    {value: 'I am not a protected veteran-3', viewValue: 'I am not a protected veteran'}
  ];

  Disabilities: Disability[] = [
    {value: 'I do not have disability-0', viewValue: 'I do not have disability'},
    {value: 'I have disability-1', viewValue: 'I have disability'}
  ];

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
  enteredAddress2 = "";
  enteredCity = "";
  enteredState = "";
  enteredZipcode = "";
  enteredJob = "";
  enteredCompany = "";
  enteredLocation = "";
  enteredFromDate = "";
  enteredToDate = "";
  enteredRole = "";
  //enteredJob2 = "";
  enteredSchool = "";
  enteredEducationlevel = "";
  enteredStartDate = "";
  enteredEndDate = "";
  enteredMajor = "";
  enteredCumulativegpa = "";
  enteredSkills = "";
  enteredAccomplishments = "";
  enteredSponsership = "";
  enteredAcknowledgment = "";
  enteredGender = "";
  enteredHispanic = "";
  enteredVeteran = "";
  enteredDiability: "";
  @Output() jobappCreated = new EventEmitter();
 
  constructor(
    private _formBuilder: FormBuilder, 
    private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });

  }

  onAddJobapp() {

    alert('Congratulation!, you have submitted your application successfully. View the submitted information below');
    const jobapp = {
      firstName: this.enteredFirstName,
      lastName: this.enteredLastName,
      telephone: this.enteredTelephone,
      email: this.enteredEmail,
      address: this.enteredAddress,
      address2: this.enteredAddress2,
      city: this.enteredCity,
      state: this.enteredState,
      zipcode: this.enteredZipcode,
      job: this.enteredJob,
      company: this.enteredCompany,
      location: this.enteredLocation,
      fromDate: this.enteredFromDate,
      toDate: this.enteredToDate,
      role: this.enteredRole,
      /*job2: this.enteredJob2,
      company2: this.enteredCompany,
      location2: this.enteredLocation,
      fromDate2: this.enteredFromDate,
      toDate2: this.enteredToDate,
      role2: this.enteredRole,
      job3: this.enteredJob,
      company3: this.enteredCompany,
      location3: this.enteredLocation,
      fromDate3: this.enteredFromDate,
      toDate3: this.enteredToDate,
      role3: this.enteredRole, */
      schoolname: this.enteredSchool,
      educationlevel: this.enteredEducationlevel,
      startdate: this.enteredStartDate,
      enddate: this.enteredEndDate,
      major: this.enteredMajor,
      cumulativegpa: this.enteredCumulativegpa,
      skills: this.enteredSkills,
      accomplishments: this.enteredAccomplishments,
      sponsership: this.enteredSponsership,
      acknowledgment: this.enteredAcknowledgment,
      gender: this.enteredGender,
      hispanic: this.enteredHispanic,
      veteran: this.enteredVeteran,
      disability: this.enteredDiability
    };

    this.jobappCreated.emit(jobapp);

    console.log("test1 " + jobapp.firstName);


    let req = {
      firstname: jobapp.firstName,
    };

    this.http
      .post("http://localhost:3000/jobappform/apply", req)
      .subscribe(response => {
        console.log("res is :", response);
      });
  }
}
