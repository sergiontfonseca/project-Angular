import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Ex3TransactionListComponent } from './ex3-transaction-list/ex3-transaction-list.component';
import { Ex3TransactionDetailsComponent } from './ex3-transaction-details/ex3-transaction-details.component';
import { Ex2CalculatorComponent } from './ex2-calculator/ex2-calculator.component';
import { Ex1HelloNameComponent } from './ex1-hello-name/ex1-hello-name.component';

const routes: Routes = [
  { path: '', redirectTo: '/ex3/transactions', pathMatch: 'full' },
  { path: 'ex1', component: Ex1HelloNameComponent },
  { path: 'ex2', component: Ex2CalculatorComponent },
  { path: 'ex3/transactions', component: Ex3TransactionListComponent },
  { path: 'ex3/transactions/details/:id', component: Ex3TransactionDetailsComponent }, 
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }