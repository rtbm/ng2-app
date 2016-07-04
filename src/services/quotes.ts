import { Injectable } from '@angular/core';
import { ServerService } from './server';

export interface Quote {
  name: string;
  content: string;
  url: string;
}

@Injectable()
export class QuotesService {
  constructor(private serverService: ServerService) {
  }

  fetchAll() {
    return new Promise((resolve, reject) => {
      this.serverService.get('/quotes')
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  read(id: string) {
    return new Promise((resolve, reject) => {
      this.serverService.get(`/quotes/${id}`)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  save(quote: Quote) {
    return new Promise((resolve, reject) => {
      this.serverService.post('/quotes', quote)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  update(id: string, quote: Quote) {
    return new Promise((resolve, reject) => {
      this.serverService.put('/quotes', id, quote)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  remove(id: string) {
    return new Promise((resolve, reject) => {
      this.serverService.delete('/quotes', id)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }
}
