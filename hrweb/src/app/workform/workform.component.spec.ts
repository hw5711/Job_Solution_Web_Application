import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkformComponent } from './workform.component';

describe('WorkformComponent', () => {
  let component: WorkformComponent;
  let fixture: ComponentFixture<WorkformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
