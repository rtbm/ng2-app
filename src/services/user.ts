import { Injectable } from '@angular/core';
import { select } from 'ng2-redux/lib/index';
import { ISession } from '../reducers/session';
import { Observable } from 'rxjs';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';

@Injectable()
export class UserService {
  @select(state => state.session.get('id_token')) private token$: Observable<ISession>;

  public email: string = '';
  public userId: string = '';

  constructor() {
    this.token$.subscribe((token: any) => {
      if (!token) {
        this.email = undefined;
        this.userId = undefined;
      } else {
        const decodedToken = new JwtHelper().decodeToken(token);
        this.email = decodedToken.email;
        this.userId = decodedToken._id;
      }
    });
  }
}
