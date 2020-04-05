import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobspagePopupComponent } from './jobspage-popup.component';

describe('JobspagePopupComponent', () => {
  let component: JobspagePopupComponent;
  let fixture: ComponentFixture<JobspagePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobspagePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobspagePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
