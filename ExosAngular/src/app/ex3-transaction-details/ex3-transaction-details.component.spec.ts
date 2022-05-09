import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3TransactionDetailsComponent } from './ex3-transaction-details.component';

describe('Ex3TransactionDetailsComponent', () => {
  let component: Ex3TransactionDetailsComponent;
  let fixture: ComponentFixture<Ex3TransactionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex3TransactionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex3TransactionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
