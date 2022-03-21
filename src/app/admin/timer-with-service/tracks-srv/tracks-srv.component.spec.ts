import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksSrvComponent } from './tracks-srv.component';

describe('TracksSrvComponent', () => {
  let component: TracksSrvComponent;
  let fixture: ComponentFixture<TracksSrvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TracksSrvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TracksSrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
