import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfavjobComponent } from './myfavjob.component';

describe('MyfavjobComponent', () => {
  let component: MyfavjobComponent;
  let fixture: ComponentFixture<MyfavjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfavjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfavjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
