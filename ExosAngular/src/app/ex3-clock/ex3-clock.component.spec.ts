import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3ClockComponent } from './ex3-clock.component';

describe('Ex3ClockComponent', () => {
  let component: Ex3ClockComponent;
  let fixture: ComponentFixture<Ex3ClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex3ClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex3ClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
