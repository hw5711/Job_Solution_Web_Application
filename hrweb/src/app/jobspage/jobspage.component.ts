import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { LoginService } from "../login/login.service";

interface industry {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-jobspage',
  templateUrl: './jobspage.component.html',
  styleUrls: ['./jobspage.component.css']
})
export class JobspageComponent implements OnInit {

  panelOpenState = false;
  jobtype = new FormControl();
  location = new FormControl();

  jobtypeList: string[] = ['Internship', 'Co-op', 'Full Time', 'Part Time'];
  
  locationList: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
  'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
  'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  industries: industry[] = [
    {value: 'Financial Service-0', viewValue: 'Financial Service'},
    {value: 'Accounting-1', viewValue: 'Accounting'},
    {value: 'Manufacturing-2', viewValue: 'Manufacturing'},
     {value: 'Real estate/ Construction-3', viewValue: 'Real estate/Construction'},
    {value: 'Marketing/Advertising/PR-4', viewValue: 'Marketing/Advertising/PR'},
    {value: 'Government/Education-5', viewValue: 'Government/Education'},
     {value: 'Consulting-6', viewValue: 'Consulting'},
    {value: 'Pharma/Biotech-7', viewValue: 'Pharma/Biotech'},
    {value: 'Technology/Science-8', viewValue: 'Technology/Science'},
     {value: 'Healthcare-9', viewValue: 'Healthcare'},
    {value: 'Aerospace-10', viewValue: 'Aerospace'},
    {value: 'Legal-11', viewValue: 'Legal'},
    {value: 'Transportation/Logistics-12', viewValue: 'Transportation/Logistics'},
    {value: 'Energy-13', viewValue: 'Energy'},
    {value: 'Sports/leisure-14', viewValue: 'Sports/leisure'},
    {value: 'Others-15', viewValue: 'Others'}
  ];

  // can_id: String;
  // fnamd: String;
  // lname: String;
  // phone: Number;
  // work_experience: [{
  //   company: String,
  //   title: String,
  //   start_date: Date,
  //   end_date: Date,
  //   description: String,
  // }];
  // education: [{
  //   school: String,
  //   dgree: String,
  //   major: String,
  //   start_year: Number,
  //   end_year: Number,
  // }];
  // updated: Boolean;

  constructor(
    // private http: HttpClient,
    // private loginService: LoginService,
    // public route: ActivatedRoute
  ) { }

  ngOnInit() {
   // this.can_id = this.loginService.getUserId();
  }

  //get candidate profile history
// getCandidateProfile(){
//   this.http
//     .get("http://localhost:3000/cand-profile/" + this.can_id)
//     .subscribe(CanData => {
//       this.fnamd = CanData["fname"];
//       this.lname = CanData["lname"];
//       this.phone = CanData["phone"];
//       this.work_experience = CanData["work_experience"];
//       this.education = CanData["education"];
//     })
// }

  //Update account info
  // SaveUpdate() {
  //   let candidateInfo = {
  //     _id: this.can_id,
  //     fnamd: this.fnamd,
  //     lname: this.lname,
  //     pnone: this.phone,
  //     work_experience: this.work_experience,
  //     eucation: this.education,
  //   };
  //   console.log("id is:", this.can_id);

  //   this.http
  //     .put("http://localhost:3000/cand-profile/" + this.can_id, candidateInfo)
  //     .subscribe(response => {
  //       console.log("res is :", response);
  //     });
  //   this.updated = true;
  // }

}


