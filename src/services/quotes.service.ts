import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Quote } from '../models';

const qs = require('qs');

@Injectable()
export class QuotesService {
  constructor(private serverService: ServerService) {
  }

  fetchAll = (payload: any) => this.serverService.get(`/quotes?${qs.stringify(payload)}`);
  read = (_id: string) => this.serverService.get(`/quotes/${_id}`);
  save = (quote: Quote) => this.serverService.post('/quotes', quote);
  update = (_id: string, quote: Quote) => this.serverService.put(`/quotes/${_id}`, quote);
  remove = (_id: string) => this.serverService.delete(`/quotes/${_id}`);
  recommend = (quote: Quote) => this.serverService.post(`/quotes/${quote._id}/recommend`, {});
  unrecommend = (quote) => this.serverService.delete(`/quotes/${quote._id}/recommend`);
}
