import { Injectable } from '@angular/core';
import { UserActions, IPayloadAction } from '../actions';
import { Observable } from 'rxjs';
import { AuthService } from '../services';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class UserEpics {
  constructor(private authService: AuthService) {
  }

  signin = (action$: Observable<IPayloadAction>) => {
    return action$.filter(({type}) => type === UserActions.USER_SIGNIN)
      .flatMap(({payload}) => {
        return this.authService.signin(payload)
          .map(result => ({
            type: UserActions.USER_SIGNIN_SUCCESS,
            payload: {
              id_token: result.id_token,
              user: new JwtHelper().decodeToken(result.id_token),
            },
          }))
          .catch(error => Observable.of({
            type: UserActions.USER_SIGNIN_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  };

  signup = (action$: Observable<IPayloadAction>) => {
    return action$.filter(({type}) => type === UserActions.USER_SIGNUP)
      .flatMap(({payload}) => {
        return this.authService.signup(payload)
          .map(result => ({
            type: UserActions.USER_SIGNUP_SUCCESS,
            payload: {
              id_token: result.id_token,
              user: new JwtHelper().decodeToken(result.id_token),
            },
          }))
          .catch(error => Observable.of({
            type: UserActions.USER_SIGNUP_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  };

  resetPassword = (action$: Observable<IPayloadAction>) => {
    return action$.filter(({type}) => type === UserActions.USER_RESET_PASSWORD)
      .flatMap(({payload}) => {
        return this.authService.resetPassword(payload)
          .map(result => ({
            type: UserActions.USER_RESET_PASSWORD_SUCCESS,
            payload: result,
          }))
          .catch(error => Observable.of({
            type: UserActions.USER_RESET_PASSWORD_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  };

  changePassword = (action$: Observable<IPayloadAction>) => {
    return action$.filter(({type}) => type === UserActions.USER_CHANGE_PASSWORD)
      .flatMap(({payload}) => {
        return this.authService.changePassword(payload)
          .map(result => ({
            type: UserActions.USER_CHANGE_PASSWORD_SUCCESS,
            payload: result,
          }))
          .catch(error => Observable.of({
            type: UserActions.USER_CHANGE_PASSWORD_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  };
}
