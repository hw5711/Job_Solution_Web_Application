import { Component, OnInit, Inject} from '@angular/core';
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
  selector: 'app-applications-popup',
  templateUrl: './applications-popup.component.html',
  styleUrls: ['./applications-popup.component.css']
})
export class ApplicationsPopupComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ApplicationsPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
