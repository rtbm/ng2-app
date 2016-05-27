import {Injectable} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../reducers';
import {AuthService} from '../services/auth';

@Injectable()
export class SessionActions {
    static SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
    static SIGNIN_USER_PENDING = 'SIGNIN_USER_PENDING';
    static SIGNIN_USER_ERROR = 'SIGNIN_USER_ERROR';

    static SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
    static SIGNUP_USER_PENDING = 'SIGNUP_USER_PENDING';
    static SIGNUP_USER_ERROR = 'SIGNUP_USER_ERROR';

    static LOGOUT_USER = 'LOGOUT_USER';

    constructor(
        private ngRedux: NgRedux<IAppState>,
        private authService: AuthService
    ) {}

    signin(credentials) {
        this.ngRedux.dispatch({
            type: SessionActions.SIGNIN_USER_PENDING
        });

        this.authService.signin(credentials)
            .then(result => this.ngRedux.dispatch({
                type: SessionActions.SIGNIN_USER_SUCCESS,
                payload: result
            }))
            .catch(() => this.ngRedux.dispatch({
                type: SessionActions.SIGNIN_USER_ERROR
            }));
    }

    signup(credentials) {
        this.ngRedux.dispatch({
            type: SessionActions.SIGNUP_USER_PENDING
        });

        this.authService.signup(credentials)
          .then(result => this.ngRedux.dispatch({
              type: SessionActions.SIGNUP_USER_SUCCESS,
              payload: result
          }))
          .catch(() => this.ngRedux.dispatch({
              type: SessionActions.SIGNUP_USER_ERROR
          }));
    }

    logout() {
      this.ngRedux.dispatch({
        type: SessionActions.LOGOUT_USER
      });
    }
}
