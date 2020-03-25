import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-jobapp-form-review',
  templateUrl: './jobapp-form-review.component.html',
  styleUrls: ['./jobapp-form-review.component.css']
})
export class JobappFormReviewComponent implements OnInit{

  @Input() jobapps = [];

  constructor() {}

  ngOnInit() {
  }

}

