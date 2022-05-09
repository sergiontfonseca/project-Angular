import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3TransactionListComponent } from './ex3-transaction-list.component';

describe('Ex3TransactionListComponent', () => {
  let component: Ex3TransactionListComponent;
  let fixture: ComponentFixture<Ex3TransactionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex3TransactionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex3TransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
