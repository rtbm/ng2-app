import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { User } from '../models';

@Injectable()
export class UsersService {
  constructor(private serverService: ServerService) {
  }

  fetchAll = (filter) => this.serverService.get(`/users?filter=${filter}`);
  read = (_id: string) => this.serverService.get(`/users/${_id}`);
  update = (_id: string, user: User) => this.serverService.put(`/users/${_id}`, user);
  follow = (user: User) => this.serverService.post(`/users/${user._id}/follow`, {});
  unfollow = (user: User) => this.serverService.delete(`/users/${user._id}/follow`);
}
