import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  jobTitle: string,
  jobType: string,
  location: string,
  industryType: string,
  company: string,
  jobDescription: string
}

@Component({
  selector: 'app-myfavjob-popup',
  templateUrl: './myfavjob-popup.component.html',
  styleUrls: ['./myfavjob-popup.component.css']
})
export class MyfavjobPopupComponent implements OnInit {

  constructor(  
    public dialogRef: MatDialogRef<MyfavjobPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
