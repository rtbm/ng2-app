import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';

@Injectable()
export class UsersActions {
  static USERS_FETCH = 'USERS_FETCH';
  static USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS';
  static USERS_FETCH_ERROR = 'USERS_FETCH_ERROR';

  static USERS_INVITE = 'USERS_INVITE';
  static USERS_INVITE_SUCCESS = 'USERS_INVITE_SUCCESS';
  static USERS_INVITE_ERROR = 'USERS_INVITE_ERROR';

  static USERS_FOLLOW = 'USERS_FOLLOW';
  static USERS_FOLLOW_SUCCESS = 'USERS_FOLLOW_SUCCESS';
  static USERS_FOLLOW_ERROR = 'USERS_FOLLOW_ERROR';

  static USERS_UNFOLLOW = 'USERS_UNFOLLOW';
  static USERS_UNFOLLOW_SUCCESS = 'USERS_UNFOLLOW_SUCCESS';
  static USERS_UNFOLLOW_ERROR = 'USERS_UNFOLLOW_ERROR';

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  fetchUsers(filter) {
    this.ngRedux.dispatch({
      type: UsersActions.USERS_FETCH,
      payload: { filter },
    });
  }

  follow(user) {
    this.ngRedux.dispatch({
      type: UsersActions.USERS_FOLLOW,
      payload: { user },
    });
  }

  unfollow(user) {
    this.ngRedux.dispatch({
      type: UsersActions.USERS_UNFOLLOW,
      payload: { user },
    });
  }
}
