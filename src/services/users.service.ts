import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { User } from '../models';

@Injectable()
export class UsersService {
  constructor(private serverService: ServerService) {
  }

  fetchAll(filter) {
    return this.serverService.get(`/users?filter=${filter}`);
  }

  read(_id: string) {
    return this.serverService.get(`/users/${_id}`);
  }

  update(_id: string, user: User) {
    return this.serverService.put(`/users/${_id}`, user);
  }

  follow(user: User) {
    return this.serverService.post(`/users/${user._id}/follow`, {});
  }

  unfollow(user: User) {
    return this.serverService.delete(`/users/${user._id}/follow`);
  }
}
