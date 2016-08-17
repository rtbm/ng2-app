import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../state';

@Injectable()
export class UserActions {
  static USER_SIGNIN = 'USER_SIGNIN';
  static USER_SIGNIN_SUCCESS = 'USER_SIGNIN_SUCCESS';
  static USER_SIGNIN_ERROR = 'USER_SIGNIN_ERROR';

  static USER_SIGNUP = 'USER_SIGNUP';
  static USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
  static USER_SIGNUP_ERROR = 'USER_SIGNUP_ERROR';

  static USER_RESET_PASSWORD = 'USER_RESET_PASSWORD';
  static USER_RESET_PASSWORD_SUCCESS = 'USER_RESET_PASSWORD_SUCCESS';
  static USER_RESET_PASSWORD_ERROR = 'USER_RESET_PASSWORD_ERROR';

  static USER_CHANGE_PASSWORD = 'USER_CHANGE_PASSWORD';
  static USER_CHANGE_PASSWORD_SUCCESS = 'USER_CHANGE_PASSWORD_SUCCESS';
  static USER_CHANGE_PASSWORD_ERROR = 'USER_CHANGE_PASSWORD_ERROR';

  static USER_SIGNOUT = 'USER_SIGNOUT';

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  signin(credentials) {
    this.ngRedux.dispatch({
      type: UserActions.USER_SIGNIN,
      payload: credentials,
    });
  }

  signup(credentials) {
    this.ngRedux.dispatch({
      type: UserActions.USER_SIGNUP,
      payload: credentials,
    });
  }

  resetPassword(credentials) {
    this.ngRedux.dispatch({
      type: UserActions.USER_RESET_PASSWORD,
      payload: credentials,
    });
  }

  changePassword(credentials) {
    this.ngRedux.dispatch({
      type: UserActions.USER_CHANGE_PASSWORD,
      payload: credentials,
    });
  }

  signout() {
    this.ngRedux.dispatch({
      type: UserActions.USER_SIGNOUT,
    });
  }
}
