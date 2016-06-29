import { Injectable } from '@angular/core';
import { ServerService } from './server';

@Injectable()
export class UsersService {
  constructor(private serverService: ServerService) {
  }

  fetchAll() {
    return new Promise((resolve, reject) => {
      this.serverService.get('/users')
        .subscribe(
          users => resolve(users),
          err => reject()
        );
    });
  }
}
