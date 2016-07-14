import { Injectable } from '@angular/core';
import { ServerService } from './server';
import { Circle } from '../models';

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

  read(_id: string) {
    return new Promise((resolve, reject) => {
      this.serverService.get(`/circles/${_id}`)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  save(circle: Circle) {
    return new Promise((resolve, reject) => {
      this.serverService.post('/circles', circle)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  update(_id: string, circle: Circle) {
    return new Promise((resolve, reject) => {
      this.serverService.put(`/circles/${_id}`, circle)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  remove(_id: string) {
    return new Promise((resolve, reject) => {
      this.serverService.delete(`/circles/${_id}`)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }
}
