import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobapp-form',
  templateUrl: './jobapp-form.component.html',
  styleUrls: ['./jobapp-form.component.css']
})
export class JobappFormComponent implements OnInit {

  storedReviews = [];

  onReviewAdded(review) {
    this.storedReviews.push(review);
  } 
  
  constructor() { }

  ngOnInit() {
  }

}
