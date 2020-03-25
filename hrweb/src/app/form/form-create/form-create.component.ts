import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {ErrorStateMatcher} from '@angular/material/core';

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
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class FormCreateComponent implements OnInit {

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
  @Output() reviewCreated = new EventEmitter();

  onReview()
  {
    const review = {
      firstName: this.enteredFirstName,
      lastName: this.enteredLastName,
      telephone: this.enteredTelephone,
      email: this.enteredEmail,
      address: this.enteredAddress,
      address2: this.eneteredAddress2,
      city: this.enteredCity,
      state: this.enteredState,
      zipcode: this.enteredZipcode,
      job: this.enteredJob,
      company: this.enteredCompany,
      location: this.enteredLocation,
      fromDate: this.enteredFromDate,
      toDate: this.enteredToDate,
      role: this.enteredRole,
      school: this.enteredSchool,
      level: this.enteredEducationlevel,
      StartDate: this.enteredStartDate,
      EndDate: this.enteredEndDate,
      major: this.enteredMajor,
      gpa: this.enteredCumulativegpa,
      skills: this.enteredSkills,
      accomplishments: this.enteredAccomplishments
    
    };
    this.reviewCreated.emit(review);
    
  }

  onSubmit()
  {
    alert('Congratulation!, you have submitted your application successfully.');
  }

  

  constructor(private _formBuilder: FormBuilder) { }

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

