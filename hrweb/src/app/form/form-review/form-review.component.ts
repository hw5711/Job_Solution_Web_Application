import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-review',
  templateUrl: './form-review.component.html',
  styleUrls: ['./form-review.component.css']
})
export class FormReviewComponent implements OnInit {

  @Input() reviews = [];

  constructor() { }

  ngOnInit() {
  }

}
