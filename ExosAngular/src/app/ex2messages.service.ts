import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Ex2messagesService {
  messages: string[] = [];

  add(msg: string) {
    this.messages.push(msg);
  }

  clear(id: any) {
    for(let i in this.messages){
      if(parseInt(i) === id){
        this.messages[i] = '';
        this.messages = this.messages.filter(word=>word !== '');
      }
    }
  }
}
