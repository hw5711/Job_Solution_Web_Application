import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

}
