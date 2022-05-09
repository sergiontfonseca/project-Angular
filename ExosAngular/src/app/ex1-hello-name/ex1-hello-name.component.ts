import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Fonts } from '../ex1fonts';

@Component({
  selector: 'app-ex1-hello-name',
  templateUrl: './ex1-hello-name.component.html',
  styleUrls: ['./ex1-hello-name.component.css']
})
export class Ex1HelloNameComponent implements OnInit {

  @Input() name?: string;
  fonts = Fonts;
  alignments = ['left','right','center'];
  selectedFont: string = 'Arial, sans-serif';
  selectedFontSize: number = 30;
  selectedAlignment: string = 'center';
  fontSizeErrorMessage: string= '';

  constructor(private template: ElementRef) {}

  ngOnInit(): void {
  }

  restrictValue(event: any){
    if(event.target.value < 14){
      this.selectedFontSize = 14;
      event.target.value = 14;
      this.fontSizeErrorMessage = 'Minimum value of 14';
    }
    else if(event.target.value > 100){
      this.selectedFontSize = 100;
      event.target.value = 100;
      this.fontSizeErrorMessage = 'Maximum value of 100';
    }
    else {
      this.selectedFontSize = event.target.value;
      this.fontSizeErrorMessage = '';
    }
  }

  blurOnEnter(event: any) {
    if(event.key === 'Enter'){
      event.target.blur();
    }
  }

  checksAndChangeAlign(align: string){
    let checkbox = this.template.nativeElement.querySelector(`#${align}`);

    if(checkbox.id === align && checkbox.checked === true){
      for(let i of this.alignments){
        let iterator = this.template.nativeElement.querySelector(`#${i}`);
        if(iterator.id !== align){
          iterator.checked = false;
        }
        else{
          iterator.checked = true;
        }
      }
    }
    else if (checkbox.id === align && checkbox.checked !== true){
      checkbox.checked = true;
    }
    
    this.selectedAlignment = align;
  }
}
