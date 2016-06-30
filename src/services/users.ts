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
          res => resolve(res),
          err => reject(err)
        );
    });
  }
}
