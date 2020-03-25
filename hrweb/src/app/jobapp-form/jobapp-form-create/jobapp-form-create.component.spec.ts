import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobappFormCreateComponent } from './jobapp-form-create.component';

describe('JobappFormCreateComponent', () => {
  let component: JobappFormCreateComponent;
  let fixture: ComponentFixture<JobappFormCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobappFormCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobappFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
