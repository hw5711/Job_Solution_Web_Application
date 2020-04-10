import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanFormPopupComponent } from './can-form-popup.component';

describe('CanFormPopupComponent', () => {
  let component: CanFormPopupComponent;
  let fixture: ComponentFixture<CanFormPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanFormPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanFormPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
