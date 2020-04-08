import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { map, startWith } from 'rxjs/operators';
import { LoginService } from "../login/login.service";
import { Router } from "@angular/router";

export interface Company {
  flag: string;
  name: string;
}

export interface josbtype {
  value: string;
  viewValue: string;
}

export interface location {
  value: string;
  viewValue: string;
}

export interface industry {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})

export class PostJobComponent {
  hr_id = "";

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  companyCtrl = new FormControl();
  filteredCompany: Observable<Company[]>;

  company: Company[] = [
    {
      name: 'Pergo',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Pergo_Company_Logo.jpg'
    },
    {
      name: 'Ukrai',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Ukrainian_Mineral_Company_logo_-_UMC_%281000x371_px%29.png'
    },
    {
      name: 'Florida',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Demag_Company_Logo.jpg'
    },
    {
      name: 'Texas',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/The_Boring_Company_Logo.svg'
    }
  ];

  jobtypes: josbtype[] = [
    { value: 'Internship', viewValue: 'Internship' },
    { value: 'Co-op', viewValue: 'Co-op' },
    { value: 'Full Time', viewValue: 'Full Time' },
    { value: 'Part Time', viewValue: 'Part Time' }
  ];

  locations: location[] = [
    { value: 'Alabama', viewValue: 'Alabama' },
    { value: 'Alaska', viewValue: 'Alaska' },
    { value: 'Arizona', viewValue: 'Arizona' },
    { value: 'Arkansas', viewValue: 'Arkansas' },
    { value: 'California', viewValue: 'California' },
    { value: 'Colorado', viewValue: 'Colorado' },
    { value: 'Connecticut', viewValue: 'Connecticut' },
    { value: 'Delaware', viewValue: 'Delaware' },
    { value: 'Florida', viewValue: 'Florida' },
    { value: 'Georgia', viewValue: 'Georgia' },
    { value: 'Hawaii', viewValue: 'Hawaii' },
    { value: 'Idaho', viewValue: 'Idaho' },
    { value: 'Illinois', viewValue: 'Illinois' },
    { value: 'Indiana', viewValue: 'Indiana' },
    { value: 'Iowa', viewValue: 'Iowa' },
    { value: 'Kansas', viewValue: 'kanas' },
    { value: 'Kentucky', viewValue: 'Kentucky' },
    { value: 'Louisiana', viewValue: 'Louisiana' },
    { value: 'Maine', viewValue: 'Maine' },
    { value: 'Maryland', viewValue: 'Maryland' },
    { value: 'Massachusetts', viewValue: 'Massachusette' },
    { value: 'Michigan', viewValue: 'Michigan' },
    { value: 'Minnesota', viewValue: 'Minnesota' },
    { value: 'Mississippi', viewValue: 'Mississippi' },
    { value: 'Missouri', viewValue: 'Missouri' },
    { value: 'Montana', viewValue: 'Montana' },
    { value: 'Nebraska', viewValue: 'Nebraska' },
    { value: 'Nevada', viewValue: 'Neveda' },
    { value: 'New Hampshire', viewValue: 'New Hampshire' },
    { value: 'New Jersey', viewValue: 'New Jersey' },
    { value: 'New Mexico', viewValue: 'New Mexico' },
    { value: 'New York', viewValue: 'New York' },
    { value: 'North Carolina', viewValue: 'North Carolina' },
    { value: 'North Dakota', viewValue: 'North Dakota' },
    { value: 'Ohio', viewValue: 'Ohio' },
    { value: 'Oklahoma', viewValue: 'Oklahoma' },
    { value: 'Oregon', viewValue: 'Oregon' },
    { value: 'Pennsylvania', viewValue: 'Pennsylvania' },
    { value: 'Rhode Island', viewValue: 'Rhode Island' },
    { value: 'South Carolina', viewValue: 'South Carolina' },
    { value: 'South Dakota', viewValue: 'South Dakota' },
    { value: 'Tennessee', viewValue: 'Tennessee' },
    { value: 'Texas', viewValue: 'Texas' },
    { value: 'Utah', viewValue: 'Utah' },
    { value: 'Vermont', viewValue: 'Vermont' },
    { value: 'Virginia', viewValue: 'Virginia' },
    { value: 'Washington', viewValue: 'Washington' },
    { value: 'West Virginia', viewValue: 'West Viriginia' },
    { value: 'Wisconsin', viewValue: 'Wisconsin' },
    { value: 'Wyoming', viewValue: 'Wyoming' }
  ];

  industries: industry[] = [
    { value: 'Financial Service', viewValue: 'Financial Service' },
    { value: 'Accounting', viewValue: 'Accounting' },
    { value: 'Manufacturing', viewValue: 'Manufacturing' },
    { value: 'Real estate/ Construction', viewValue: 'Real estate/Construction' },
    { value: 'Marketing/Advertising/PR', viewValue: 'Marketing/Advertising/PR' },
    { value: 'Government/Education', viewValue: 'Government/Education' },
    { value: 'Consulting', viewValue: 'Consulting' },
    { value: 'Pharma/Biotech', viewValue: 'Pharma/Biotech' },
    { value: 'Technology/Science', viewValue: 'Technology/Science' },
    { value: 'Healthcare', viewValue: 'Healthcare' },
    { value: 'Aerospace', viewValue: 'Aerospace' },
    { value: 'Legal', viewValue: 'Legal' },
    { value: 'Transportation/Logistics', viewValue: 'Transportation/Logistics' },
    { value: 'Energy', viewValue: 'Energy' },
    { value: 'Sports/leisure', viewValue: 'Sports/leisure' },
    { value: 'Others', viewValue: 'Others' }
  ];

  jobTitle: string;
  companyName: string;
  location: string;
  industryType: string;
  jobType: string;
  startDate: Date;
  expirationDate: Date;
  description: string;

  posted: boolean;

  constructor(
    private http: HttpClient,
    public route: ActivatedRoute,
    private loginService: LoginService,
    private router: Router) {

    this.filteredCompany = this.companyCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filteredCompany(state) : this.company.slice())
      );
  }

  ngOnInit() {
    this.hr_id = this.loginService.getUserId();
    this.posted = true;
  }

  private _filteredCompany(value: string): Company[] {
    const filterValue = value.toLowerCase();
    return this.company.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  submit(){
    let req = {
      job_id: Math.random().toString(36).substr(2,9),
      hr_id: this.hr_id,
      jobTitle: this.jobTitle,
      jobType: this.jobType,
      company: this.companyName,
      location: this.location,
      industryType: this.industryType,
      startDate: this.startDate,
      expirationDate: this.expirationDate,
      jobDescription: this.description,
      candidate: null,
    };
    console.log(req);
    this.http
      .post("http://localhost:3000/hr/create_job", req)
      .subscribe(response => {
        console.log("job post successed: ", response);
      });
    this.posted = false;

  }

  postAnother(){
      this.jobTitle = "";
      this.companyName = "";
      this.location = "";
      this.industryType= "";
      this.jobType = "";
      this.startDate= null;
      this.expirationDate= null;
      this.description= "";
      this.posted = true;
  }


}
