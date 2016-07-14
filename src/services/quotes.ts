import { Injectable } from '@angular/core';
import { ServerService } from './server';
import { Quote } from '../models';

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

  fetchFeed() {
    return new Promise((resolve, reject) => {
      this.serverService.get('/quotes/feed')
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  read(_id: string) {
    return new Promise((resolve, reject) => {
      this.serverService.get(`/quotes/${_id}`)
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

  update(_id: string, quote: Quote) {
    return new Promise((resolve, reject) => {
      this.serverService.put(`/quotes/${_id}`, quote)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  remove(_id: string) {
    return new Promise((resolve, reject) => {
      this.serverService.delete(`/quotes/${_id}`)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }
}
