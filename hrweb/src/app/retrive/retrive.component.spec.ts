import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetriveComponent } from './retrive.component';

describe('RetriveComponent', () => {
  let component: RetriveComponent;
  let fixture: ComponentFixture<RetriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
