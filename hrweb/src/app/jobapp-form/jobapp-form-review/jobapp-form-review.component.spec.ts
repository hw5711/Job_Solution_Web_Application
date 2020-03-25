import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobappFormReviewComponent } from './jobapp-form-review.component';

describe('JobappFormReviewComponent', () => {
  let component: JobappFormReviewComponent;
  let fixture: ComponentFixture<JobappFormReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobappFormReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobappFormReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
