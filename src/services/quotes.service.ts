import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Quote } from '../models';

@Injectable()
export class QuotesService {
  constructor(private serverService: ServerService) {
  }

  fetchAll() {
    return this.serverService.get('/quotes');
  }

  fetchFeed() {
    return this.serverService.get('/quotes/feed');
  }

  read(_id: string) {
    return this.serverService.get(`/quotes/${_id}`);
  }

  save(quote: Quote) {
    return this.serverService.post('/quotes', quote);
  }

  update(_id: string, quote: Quote) {
    return this.serverService.put(`/quotes/${_id}`, quote);
  }

  remove(_id: string) {
    return this.serverService.delete(`/quotes/${_id}`);
  }
}
