import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { SortService } from './ex3sort.service';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {
  
  @Input() appSort!: any[];
  
  constructor(
    private targetElement: ElementRef,
    private sortService: SortService,
    ) {}
    
    @HostListener("click")
    sortData (){
      const elem = this.targetElement.nativeElement;
      const order = elem.getAttribute("data-order");
      const property = elem.getAttribute("data-name");
      const type = elem.getAttribute("data-type");
      
      if(order === "desc"){
        this.appSort.sort(this.sortService.startSort(property, order, type));
        elem.setAttribute("data-order", "asc");
      }
      else{
        this.appSort.sort(this.sortService.startSort(property, order, type));
        elem.setAttribute("data-order", "desc");
      }
    }
  }