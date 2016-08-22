import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Credentials } from '../models';

@Injectable()
export class AuthService {
  constructor(private serverService: ServerService) {
  }

  signup = (credentials: Credentials) => this.serverService.post('/auth/signup', credentials);
  signin = (credentials: Credentials) => this.serverService.post('/auth/signin', credentials);
  resetPassword = (credentials: Credentials) => this.serverService.post('/auth/reset-password', credentials);
  changePassword = (credentials: Credentials) => this.serverService.post('/auth/change-password', credentials);
}
