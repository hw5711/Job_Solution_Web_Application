import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandProfileComponent } from './cand-profile.component';

describe('CandProfileComponent', () => {
  let component: CandProfileComponent;
  let fixture: ComponentFixture<CandProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
