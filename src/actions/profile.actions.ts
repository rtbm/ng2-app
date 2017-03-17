import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../state';

@Injectable()
export class ProfileActions {
  static USER_FETCH = 'USER_FETCH';
  static USER_FETCH_SUCCESS = 'PROFILE_FETCH_SUCCESS';
  static USER_FETCH_ERROR = 'PROFILE_FETCH_ERROR';

  static USER_UPDATE = 'USER_UPDATE';
  static USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS';
  static USER_UPDATE_ERROR = 'USER_UPDATE_ERROR';

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  fetchUser(_id) {
    this.ngRedux.dispatch({
      type: ProfileActions.USER_FETCH,
      payload: _id,
    });
  }

  updateUser(user) {
    this.ngRedux.dispatch({
      type: ProfileActions.USER_UPDATE,
      payload: user,
    });
  }
}
