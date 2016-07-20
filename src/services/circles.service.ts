import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Circle } from '../models';

@Injectable()
export class CirclesService {
  constructor(private serverService: ServerService) {
  }

  fetchAll() {
    return this.serverService.get('/circles');
  }

  read(_id: string) {
    return this.serverService.get(`/circles/${_id}`);
  }

  save(circle: Circle) {
    return this.serverService.post('/circles', circle);
  }

  update(_id, circle: Circle) {
    return this.serverService.put(`/circles/${_id}`, circle);
  }

  remove(_id: string) {
    return this.serverService.delete(`/circles/${_id}`);
  }
}
