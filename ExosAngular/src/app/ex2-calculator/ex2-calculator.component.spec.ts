import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2CalculatorComponent } from './ex2-calculator.component';

describe('Ex2CalculatorComponent', () => {
  let component: Ex2CalculatorComponent;
  let fixture: ComponentFixture<Ex2CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2CalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
