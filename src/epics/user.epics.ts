import { Injectable } from '@angular/core';
import { ActionsObservable } from 'redux-observable';
import { UserActions } from '../actions';
import { Observable } from 'rxjs';
import { AuthService } from '../services';

@Injectable()
export class UserEpics {
  constructor(private authService: AuthService) {
  }

  signin = (action$: ActionsObservable) => {
    return action$.ofType(UserActions.USER_SIGNIN)
      .flatMap(({payload}) => {
        return this.authService.signin(payload)
          .map(result => ({
            type: UserActions.USER_SIGNIN_SUCCESS,
            payload: result,
          }))
          .catch(error => Observable.of({
            type: UserActions.USER_SIGNIN_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  };

  signup = (action$: ActionsObservable) => {
    return action$.ofType(UserActions.USER_SIGNUP)
      .flatMap(({payload}) => {
        return this.authService.signup(payload)
          .map(result => ({
            type: UserActions.USER_SIGNUP_SUCCESS,
            payload: result,
          }))
          .catch(error => Observable.of({
            type: UserActions.USER_SIGNUP_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  };

  resetPassword = (action$: ActionsObservable) => {
    return action$.ofType(UserActions.USER_RESET_PASSWORD)
      .flatMap(({payload}) => {
        return this.authService.signup(payload)
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

  changePassword = (action$: ActionsObservable) => {
    return action$.ofType(UserActions.USER_CHANGE_PASSWORD)
      .flatMap(({payload}) => {
        return this.authService.signup(payload)
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
