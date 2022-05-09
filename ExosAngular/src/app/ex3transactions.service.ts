import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

import { TransactionListItem } from './ex3transaction-list-item';
import { TransactionDetailItem } from './ex3transaction-list-item';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  
  constructor(private http: HttpClient) { }
  
  getTransactions(): Observable<TransactionListItem[]> {
    return this.http.get<TransactionListItem[]>(`data/transactions.json`);
  }
  
  getTransaction(id: string): Observable<TransactionDetailItem>{  
    return this.http.get<TransactionDetailItem>(`data/${id}.json`);
  }
}
