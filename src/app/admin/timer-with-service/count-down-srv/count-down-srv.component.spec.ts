import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownSrvComponent } from './count-down-srv.component';

describe('CountDownSrvComponent', () => {
  let component: CountDownSrvComponent;
  let fixture: ComponentFixture<CountDownSrvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownSrvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownSrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
