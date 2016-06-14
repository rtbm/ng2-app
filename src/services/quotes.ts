import { Injectable } from '@angular/core';
import { ServerService } from './server';

export interface Quote {
  content: string;
}

@Injectable()
export class QuotesService {
  constructor(private serverService: ServerService) {
  }

  fetchAll() {
    return new Promise((resolve, reject) => {
      this.serverService.get('/quotes')
        .subscribe(
          quotes => resolve(quotes),
          err => reject()
        );
    });
  }

  read(id: string) {
    return new Promise((resolve, reject) => {
      this.serverService.get(`/quotes/${id}`)
        .subscribe(
          quote => resolve(quote),
          err => reject()
        );
    });
  }

  save(quote: Quote) {
    return new Promise((resolve, reject) => {
      this.serverService.post('/quotes', quote)
        .subscribe(
          quote => resolve(quote),
          err => reject(quote)
        );
    });
  }

  update(id: string, quote: Quote) {
    return new Promise((resolve, reject) => {
      this.serverService.put('/quotes', id, quote)
        .subscribe(
          quote => resolve(quote),
          err => reject(quote)
        );
    });
  }

  remove(id: string) {
    return new Promise((resolve, reject) => {
      this.serverService.delete('/quotes', id)
        .subscribe(
          quote => resolve(quote),
          err => reject()
        );
    });
  }
}
