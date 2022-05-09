import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SortService {
    private collator = new Intl.Collator(undefined,{numeric:true, sensitivity:"base"});
    
    constructor(){}
    
    public startSort (property: string, order: string, type: string){
        return (a: any,b: any) => {
            let sortOrder = order === 'desc'? -1 : 1;
            if (type === 'date'){
                return this.sortData(new Date(a[property]), new Date(b[property]), sortOrder);
            }
            else{
                return this.collator.compare(a[property], b[property]) * sortOrder;
            }
        }
    }
    
    private sortData(a: Date,b: Date, order: number){
        if (a<b) {
            return -1*order;
        }
        else if(a>b){
            return 1*order;
        }
        else{
            return order;
        }
    }
}
