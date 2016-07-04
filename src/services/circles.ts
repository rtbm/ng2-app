import { Injectable } from '@angular/core';
import { ServerService } from './server';

export interface Circle {
  name: string;
}

@Injectable()
export class CirclesService {
  constructor(private serverService: ServerService) {
  }

  fetchAll() {
    return new Promise((resolve, reject) => {
      this.serverService.get('/circles')
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  read(id: string) {
    return new Promise((resolve, reject) => {
      this.serverService.get(`/circles/${id}`)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  save(quote: Circle) {
    return new Promise((resolve, reject) => {
      this.serverService.post('/circles', quote)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  update(id: string, quote: Circle) {
    return new Promise((resolve, reject) => {
      this.serverService.put('/circles', id, quote)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  remove(id: string) {
    return new Promise((resolve, reject) => {
      this.serverService.delete('/circles', id)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }
}
