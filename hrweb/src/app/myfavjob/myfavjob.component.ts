import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myfavjob',
  templateUrl: './myfavjob.component.html',
  styleUrls: ['./myfavjob.component.css']
})
export class MyfavjobComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor() { }

  ngOnInit() {
  }

}
