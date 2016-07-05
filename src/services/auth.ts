import { Injectable } from '@angular/core';
import { ServerService } from './server';

interface Credentials {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(private serverService: ServerService) {
  }

  signup(credentials: Credentials) {
    return new Promise((resolve, reject) => {
      this.serverService.post('/auth/signup', credentials)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  signin(credentials: Credentials) {
    return new Promise((resolve, reject) => {
      this.serverService.post('/auth/signin', credentials)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  resetPassword(credentials: Credentials) {
    return new Promise((resolve, reject) => {
      this.serverService.post('/auth/reset-password', credentials)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  changePassword(credentials: Credentials) {
    return new Promise((resolve, reject) => {
      this.serverService.post('/auth/change-password', credentials)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }
}
