import {Injectable} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../reducers';
import {AuthService} from '../services/auth';

@Injectable()
export class SessionActions {
    static LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
    static LOGIN_USER_PENDING = 'LOGIN_USER_PENDING';
    static LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

    constructor(
        private ngRedux: NgRedux<IAppState>,
        private authService: AuthService
    ) {}

    signup(credentials) {
        this.ngRedux.dispatch({
            type: SessionActions.LOGIN_USER_PENDING
        });

        this.authService.signup(credentials)
            .then(result => this.ngRedux.dispatch({
                type: SessionActions.LOGIN_USER_SUCCESS,
                payload: result
            }))
            .catch(() => this.ngRedux.dispatch({
                type: SessionActions.LOGIN_USER_ERROR
            }));
    }
}
