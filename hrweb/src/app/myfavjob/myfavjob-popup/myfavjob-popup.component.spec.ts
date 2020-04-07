import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfavjobPopupComponent } from './myfavjob-popup.component';

describe('MyfavjobPopupComponent', () => {
  let component: MyfavjobPopupComponent;
  let fixture: ComponentFixture<MyfavjobPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfavjobPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfavjobPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
