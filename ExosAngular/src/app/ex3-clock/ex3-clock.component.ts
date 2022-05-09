import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3-clock',
  templateUrl: './ex3-clock.component.html',
  styleUrls: ['./ex3-clock.component.css']
})
export class Ex3ClockComponent implements OnInit {
  time = new Date();
  constructor() { }
  
  ngOnInit(): void {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
}
