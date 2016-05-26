import {Injectable} from '@angular/core';
import {ServerService} from './server';

interface Credentials {
    email: string;
    password: string;
}

@Injectable()
export class AuthService {
    constructor(private serverService: ServerService) {}

    signup(credentials: Credentials) {
        return new Promise((resolve, reject) => {
            this.serverService.post('/auth/signup', credentials)
                .subscribe(
                    user => resolve(user),
                    err => reject(credentials)
                );
        })
    }

    signin(credentials: Credentials) {
        return new Promise((resolve, reject) => {
            this.serverService.post('/auth/signin', credentials)
                .subscribe(
                    user => resolve(user),
                    err => reject(credentials)
                );
        });
    }
}
