import { Injectable } from '@angular/core';
import { ServerService } from './server';
import { Profile } from '../models';

@Injectable()
export class UsersService {
  constructor(private serverService: ServerService) {
  }

  fetchAll() {
    return new Promise((resolve, reject) => {
      this.serverService.get('/users')
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  follow(circleId, user) {
    return new Promise((resolve, reject) => {
      this.serverService.post(`/circles/${circleId}/users`, {
        user: {
          _id: user._id,
        },
      }).subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  readProfile(_id: string) {
    return new Promise((resolve, reject) => {
      this.serverService.get(`/users/${_id}/profile`)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  updateProfile(_id: string, profile: Profile) {
    return new Promise((resolve, reject) => {
      this.serverService.put(`/users/${_id}/profile`, profile)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }
}
