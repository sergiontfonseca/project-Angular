import { Component, OnInit } from '@angular/core';

import { TransactionListItem } from '../ex3transaction-list-item';
import { TransactionService } from '../ex3transactions.service';

@Component({
  selector: 'app-ex3-transaction-list',
  templateUrl: './ex3-transaction-list.component.html',
  styleUrls: ['./ex3-transaction-list.component.css']
})

export class Ex3TransactionListComponent implements OnInit {
  
  transactions: TransactionListItem[] = [];
  tableHeaders: string[] = [];
  
  constructor(private transactionService : TransactionService) { }
  
  ngOnInit(): void {
    this.getTransactions();
  }
  
  getTransactions(): void {
    this.transactionService.getTransactions().subscribe(data => {
      this.transactions = data;
      this.getTableHeaders();
    });
  }
  
  getTableHeaders(): void {
    this.tableHeaders = Object.keys(this.transactions[0]);
  }
}