import { Component, OnInit } from '@angular/core';
import { Ex2messagesService } from '../ex2messages.service';

@Component({
  selector: 'app-ex2-calculator',
  templateUrl: './ex2-calculator.component.html',
  styleUrls: ['./ex2-calculator.component.css']
})
export class Ex2CalculatorComponent implements OnInit {
  operations = ['add','subtract','multiply','divide'];
  selectedOp: string = 'add';
  result?: any;

  constructor(
    public messageService: Ex2messagesService
    ) { }

  ngOnInit(): void {
  }

  getResult(xi: any,yi: any, sel: any){
    const startDate = Date.now();
    const x = parseFloat(xi);
    const y = parseFloat(yi);
    
    switch(sel) { 
      case 'add': { 
        this.result = x + y;
        break; 
      } 
      case 'subtract': { 
        this.result = x - y; 
        break; 
      } 
      case 'multiply': { 
        this.result = x * y; 
        break; 
      } 
      case 'divide': { 
        this.result = x / y; 
        break; 
      } 
      default: { 
        this.result = 'Choose an operation'
        break; 
      } 
    }

    if(typeof this.result === 'number'){
      let now = new Date();
      const endDate = Date.now();
      let duration = endDate - startDate;
      this.log(`${now.toLocaleString()}: ${x} + ${y} = ${this.result}. It took ${duration} ms`);
    }
  }
  
  log(msg: string) {
    this.messageService.add(msg);
  }
}

