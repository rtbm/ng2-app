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
          token => resolve(token),
          err => reject(credentials)
        );
    })
  }

  signin(credentials: Credentials) {
    return new Promise((resolve, reject) => {
      this.serverService.post('/auth/signin', credentials)
        .subscribe(
          token => resolve(token),
          err => reject(credentials)
        );
    });
  }
}
