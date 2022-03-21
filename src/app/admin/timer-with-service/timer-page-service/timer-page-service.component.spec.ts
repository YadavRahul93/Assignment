import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerPageServiceComponent } from './timer-page-service.component';

describe('TimerPageServiceComponent', () => {
  let component: TimerPageServiceComponent;
  let fixture: ComponentFixture<TimerPageServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerPageServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerPageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
