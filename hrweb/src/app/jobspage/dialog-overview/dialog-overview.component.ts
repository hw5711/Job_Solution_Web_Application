import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  jobTitle: string,
  jobType: string,
  location: string,
  industryType: string
  jobDescription: string
}

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.css']
})

export class DialogOverviewComponent implements OnInit {
  

  ngOnInit() {
  }

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { 
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
