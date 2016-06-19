import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';

@Injectable()
export class SessionActions {
  static SESSION_SET_TOKEN = 'SESSION_SET_TOKEN';
  static SESSION_UNSET_TOKEN = 'SESSION_UNSET_TOKEN';

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  setToken(id_token) {
    const user = new JwtHelper().decodeToken(id_token);

    this.ngRedux.dispatch({
      type: SessionActions.SESSION_SET_TOKEN,
      payload: {
        id_token,
        user
      },
    });
  }

  unsetToken() {
    this.ngRedux.dispatch({
      type: SessionActions.SESSION_UNSET_TOKEN,
    });
  }
}
