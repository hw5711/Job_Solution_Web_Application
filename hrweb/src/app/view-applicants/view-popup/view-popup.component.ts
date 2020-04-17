import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from "@angular/common/http";

export interface DialogData {
  candidate_num: string,
  job_num: string,
  firstName: string,
  lastName: string,
  telephone: string,
  email: string,
  address: string,
  address2: string,
  city: string,
  state: string,
  zipcode: string,
  job: string,
  company: string,
  location: string,
  fromDate: string,
  toDate: string,
  role: string,
  schoolname: string,
  educationlevel: string,
  startdate: string,
  enddate: string,
  major: string,
  cumulativegpa: string,
  skills: string,
  accomplishments: string,
  sponsership: string,
  acknowledgment: string,
  gender: string,
  hispanic: string,
  veteran: string,
  disability: string
}

@Component({
  selector: 'app-view-popup',
  templateUrl: './view-popup.component.html',
  styleUrls: ['./view-popup.component.css']
})
export class ViewPopupComponent implements OnInit {

  searchResault: any;
  selectedChoice: string;
  select: boolean;
  choices = [
    'Yes',
    'No'
  ];

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<ViewPopupComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData
  ) { }

  ngOnInit() {
    // this.searchApplication(this.data.candidate_num);
  }

onNoClick(): void {
  //update status
  let req ={
    job_num: this.data.job_num,
    candidate_id: this.data.candidate_num,
    status: this.selectedChoice
  }
  this.http
    .post("http://localhost:3000/jobappform/set_status", req)
    .subscribe(postData => {
      // console.log("after set up " , postData);
    });

  
  this.dialogRef.close();
}

}
