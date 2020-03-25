import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobappFormComponent } from './jobapp-form.component';

describe('JobappFormComponent', () => {
  let component: JobappFormComponent;
  let fixture: ComponentFixture<JobappFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobappFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobappFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
