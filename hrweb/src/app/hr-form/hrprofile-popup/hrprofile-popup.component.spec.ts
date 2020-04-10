import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrprofilePopupComponent } from './hrprofile-popup.component';

describe('HrprofilePopupComponent', () => {
  let component: HrprofilePopupComponent;
  let fixture: ComponentFixture<HrprofilePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrprofilePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrprofilePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
