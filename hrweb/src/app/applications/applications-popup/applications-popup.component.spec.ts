import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsPopupComponent } from './applications-popup.component';

describe('ApplicationsPopupComponent', () => {
  let component: ApplicationsPopupComponent;
  let fixture: ComponentFixture<ApplicationsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
