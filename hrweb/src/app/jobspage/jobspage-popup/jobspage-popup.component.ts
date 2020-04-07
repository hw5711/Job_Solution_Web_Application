import { Component, Inject, OnInit } from '@angular/core'; 
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
  selector: 'app-jobspage-popup',
  templateUrl: './jobspage-popup.component.html',
  styleUrls: ['./jobspage-popup.component.css']
})
export class JobspagePopupComponent implements OnInit {
  select: boolean;
  status = 'Enable';
  toggle = true;

  constructor(
    public dialogRef: MatDialogRef<JobspagePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }
 
  ngOnInit() {
    this.select = false;
  }
 
  onNoClick(): void {
    this.dialogRef.close();
  }

  addFav(){
    //write fuction to change the icon to filled icon, then add the job id and details in candidate's fav list
    this.select = !this.select;
    this.enableDisableRule();
  }

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }



}








