import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { User } from '../models';

@Injectable()
export class UsersService {
  constructor(private serverService: ServerService) {
  }

  fetchAll() {
    return this.serverService.get('/users');
  }

  read(_id: string) {
    return this.serverService.get(`/users/${_id}`);
  }

  update(_id: string, user: User) {
    return this.serverService.put(`/users/${_id}`, user);
  }

  follow(circleId, user: User) {
    return this.serverService.post(`/circles/${circleId}/users`, {
      user: {
        _id: user._id,
      },
    });
  }
}
