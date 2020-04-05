import { Component, Inject, Optional, OnInit } from '@angular/core'; 
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-jobspage-popup',
  templateUrl: './jobspage-popup.component.html',
  styleUrls: ['./jobspage-popup.component.css']
})
export class JobspagePopupComponent implements OnInit {

  fromPage:string;
  //fromDialog:string;
 
  constructor(
    public dialogRef: MatDialogRef<JobspagePopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      this.fromPage = data.jobTitle;
    }
 
  ngOnInit() {
  }
 
  closeDialog(){ 
    this.dialogRef.close({event:'close'}); 
  }

}








