import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';
import { AuthService } from '../services/auth';
import { SessionActions } from './session';

@Injectable()
export class UserActions {
  static USER_SIGNIN_PENDING = 'USER_SIGNIN_PENDING';
  static USER_SIGNIN_SUCCESS = 'USER_SIGNIN_SUCCESS';
  static USER_SIGNIN_ERROR = 'USER_SIGNIN_ERROR';

  static USER_SIGNUP_PENDING = 'USER_SIGNUP_PENDING';
  static USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
  static USER_SIGNUP_ERROR = 'USER_SIGNUP_ERROR';

  static USER_RESET_PASSWORD_PENDING = 'USER_RESET_PASSWORD_PENDING';
  static USER_RESET_PASSWORD_SUCCESS = 'USER_RESET_PASSWORD_SUCCESS';
  static USER_RESET_PASSWORD_ERROR = 'USER_RESET_PASSWORD_ERROR';

  static USER_CHANGE_PASSWORD_PENDING = 'USER_CHANGE_PASSWORD_PENDING';
  static USER_CHANGE_PASSWORD_SUCCESS = 'USER_CHANGE_PASSWORD_SUCCESS';
  static USER_CHANGE_PASSWORD_ERROR = 'USER_CHANGE_PASSWORD_ERROR';

  constructor(private ngRedux: NgRedux<IAppState>,
              private authService: AuthService,
              private sessionActions: SessionActions) {
  }

  signin(credentials) {
    this.ngRedux.dispatch({
      type: UserActions.USER_SIGNIN_PENDING,
    });

    this.authService.signin(credentials)
      .then((result: any) => {
        this.ngRedux.dispatch({
          type: UserActions.USER_SIGNIN_SUCCESS,
        });

        this.sessionActions.setToken(result.id_token);
      })
      .catch(err => {
        this.ngRedux.dispatch({
          type: UserActions.USER_SIGNIN_ERROR,
          payload: { errorCode: err.status },
        });
      });
  }

  signup(credentials) {
    this.ngRedux.dispatch({
      type: UserActions.USER_SIGNUP_PENDING,
    });

    this.authService.signup(credentials)
      .then((result: any) => {
        this.ngRedux.dispatch({
          type: UserActions.USER_SIGNUP_SUCCESS,
        });

        this.sessionActions.setToken(result.id_token);
      })
      .catch(err => this.ngRedux.dispatch({
        type: UserActions.USER_SIGNUP_ERROR,
        payload: { errorCode: err.status } ,
      }));
  }

  resetPassword(credentials) {
    this.ngRedux.dispatch({
      type: UserActions.USER_RESET_PASSWORD_PENDING,
    });

    this.authService.resetPassword(credentials)
      .then(result => this.ngRedux.dispatch({
        type: UserActions.USER_RESET_PASSWORD_SUCCESS,
        payload: result,
      }))
      .catch(err => this.ngRedux.dispatch({
        type: UserActions.USER_RESET_PASSWORD_ERROR,
        payload: { errorCode: err.status },
      }));
  }

  changePassword(credentials) {
    this.ngRedux.dispatch({
      type: UserActions.USER_CHANGE_PASSWORD_PENDING,
    });

    this.authService.changePassword(credentials)
      .then(result => this.ngRedux.dispatch({
        type: UserActions.USER_CHANGE_PASSWORD_SUCCESS,
        payload: result,
      }))
      .catch(err => this.ngRedux.dispatch({
        type: UserActions.USER_CHANGE_PASSWORD_ERROR,
        payload: { errorCode: err.status },
      }));
  }

  logout() {
    this.sessionActions.unsetToken();
  }
}
