import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SortDirective } from './ex3sort.directive';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Ex3TransactionListComponent } from './ex3-transaction-list/ex3-transaction-list.component';
import { Ex3TransactionDetailsComponent } from './ex3-transaction-details/ex3-transaction-details.component';
import { Ex3ClockComponent } from './ex3-clock/ex3-clock.component';
import { Ex2CalculatorComponent } from './ex2-calculator/ex2-calculator.component';
import { Ex1HelloNameComponent } from './ex1-hello-name/ex1-hello-name.component';



@NgModule({
  declarations: [
    AppComponent,
    Ex3TransactionListComponent,
    SortDirective,
    Ex3TransactionDetailsComponent,
    Ex3ClockComponent,
    Ex2CalculatorComponent,
    Ex1HelloNameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
