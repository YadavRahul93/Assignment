import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerLimitSrvComponent } from './timer-limit-srv.component';

describe('TimerLimitSrvComponent', () => {
  let component: TimerLimitSrvComponent;
  let fixture: ComponentFixture<TimerLimitSrvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerLimitSrvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerLimitSrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
