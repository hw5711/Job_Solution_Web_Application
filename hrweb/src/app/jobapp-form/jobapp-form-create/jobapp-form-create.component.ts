import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {ErrorStateMatcher} from '@angular/material/core';

import { JobappFormService } from "../jobapp-form.service";

interface Education {
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
  eneteredAddress2 = "";
  enteredCity = "";
  enteredState = "";
  enteredZipcode = "";
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
  enteredCumulativegpa = "";
  enteredSkills = "";
  enteredAccomplishments = "";
 
  constructor(public jobappFormService: JobappFormService, private _formBuilder: FormBuilder) { }

  onAddJobapp(form: NgForm) {

    this.jobappFormService.addJobapp(
      form.value.firstName,
      form.value.lastName,
      form.value.telephone,
      form.value.email,
      form.value.address,
      form.value.address2,
      form.value.city,
      form.value.state,
      form.value.zipcode,
      form.value.job,
      form.value.company,
      form.value.location,
      form.value.fromDate,
      form.value.toDate,
      form.value.role,
      form.value.school,
      form.value.level,
      form.value.StartDate,
      form.value.EndDate,
      form.value.major,
      form.value.gpa,
      form.value.skills,
      form.value.accomplishments,
      form.value.sponsership,
      form.value.acknowledgment,
      form.value.gender,
      form.value.hispanic,
      form.value.veteran,
      form.value.disability);
  }

  onSubmit()
  {
    alert('Congratulation!, you have submitted your application successfully.');
  }

  
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

}

