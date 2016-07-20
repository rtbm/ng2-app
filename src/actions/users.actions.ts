import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';
import { UsersService } from '../services/users.service';
import { InvitesService } from '../services/invites.service';
import { CirclesActions } from './circles.actions';

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

  static USERS_FOLLOW_MODAL = 'USERS_FOLLOW_MODAL';
  static USERS_FOLLOW_MODAL_CANCEL = 'USERS_FOLLOW_MODAL_CANCEL';

  constructor(private ngRedux: NgRedux<IAppState>,
              private circlesActions: CirclesActions) {
  }

  fetchUsers() {
    this.ngRedux.dispatch({
      type: UsersActions.USERS_FETCH,
    });
  }

  invite(user) {
    this.ngRedux.dispatch({
      type: UsersActions.USERS_INVITE,
      payload: user,
    });
  }

  follow(circleId, user) {
    this.ngRedux.dispatch({
      type: UsersActions.USERS_FOLLOW,
      payload: { circleId, user },
    });
  }

  followModal(user) {
    this.circlesActions.fetchCircles();

    this.ngRedux.dispatch({
      type: UsersActions.USERS_FOLLOW_MODAL,
      payload: user,
    });
  }

  followModalCancel() {
    this.ngRedux.dispatch({
      type: UsersActions.USERS_FOLLOW_MODAL_CANCEL,
    });
  }
}
