import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

import { TransactionService } from '../ex3transactions.service';
import { TransactionDetailItem } from '../ex3transaction-list-item';



@Component({
  selector: 'app-ex3-transaction-details',
  templateUrl: './ex3-transaction-details.component.html',
  styleUrls: ['./ex3-transaction-details.component.css']
})
export class Ex3TransactionDetailsComponent implements OnInit {
  
  transaction!: TransactionDetailItem;
  
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private transactionService: TransactionService,
    ) {}
    
    ngOnInit(): void {
      this.getTransaction();
    }
    
    getTransaction(): void {
      let id = this.route.snapshot.paramMap.get('id');
      if(id){
        this.transactionService.getTransaction(id).pipe(take(1)).subscribe(data => this.transaction = data);
      } 
    }

    goBack(): void {
      this.location.back();
    }
  }