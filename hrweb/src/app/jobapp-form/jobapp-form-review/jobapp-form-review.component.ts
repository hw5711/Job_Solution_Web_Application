import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';

import { Jobapp } from '../jobapp-form.model';
import { JobappFormService } from "../jobapp-form.service";

@Component({
  selector: 'app-jobapp-form-review',
  templateUrl: './jobapp-form-review.component.html',
  styleUrls: ['./jobapp-form-review.component.css']
})
export class JobappFormReviewComponent implements OnInit, OnDestroy {

  jobapps: Jobapp[] = [];
  private jobappsSub: Subscription;

  constructor(public jobappFormService: JobappFormService) {}

  ngOnInit() {
    this.jobapps = this.jobappFormService.getJobapps();
    this.jobappsSub = this.jobappFormService.getJobappUpdateListener()
      .subscribe((jobapps: Jobapp[]) => {
        this.jobapps = jobapps;
      });
  }

  ngOnDestroy() {
    this.jobappsSub.unsubscribe();
  }

}

