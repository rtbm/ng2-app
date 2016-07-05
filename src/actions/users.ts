import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';
import { UsersService } from '../services/users';
import { InvitesService } from '../services/invites';
import { CirclesActions } from '../actions/circles';

@Injectable()
export class UsersActions {
  static USERS_FETCH_PENDING = 'USERS_FETCH_PENDING';
  static USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS';
  static USERS_FETCH_ERROR = 'USERS_FETCH_ERROR';

  static USERS_INVITE_PENDING = 'USERS_INVITE_PENDING';
  static USERS_INVITE_SUCCESS = 'USERS_INVITE_SUCCESS';
  static USERS_INVITE_ERROR = 'USERS_INVITE_ERROR';

  static USERS_FOLLOW_PENDING = 'USERS_FOLLOW_PENDING';
  static USERS_FOLLOW_SUCCESS = 'USERS_FOLLOW_SUCCESS';
  static USERS_FOLLOW_ERROR = 'USERS_FOLLOW_ERROR';

  static USERS_FOLLOW_MODAL = 'USERS_FOLLOW_MODAL';
  static USERS_FOLLOW_MODAL_CANCEL = 'USERS_FOLLOW_MODAL_CANCEL';

  constructor(private ngRedux: NgRedux<IAppState>,
              private usersService: UsersService,
              private invitesService: InvitesService,
              private circlesActions: CirclesActions) {
  }

  fetchUsers() {
    this.ngRedux.dispatch({
      type: UsersActions.USERS_FETCH_PENDING,
    });

    this.usersService.fetchAll()
      .then(result => this.ngRedux.dispatch({
        type: UsersActions.USERS_FETCH_SUCCESS,
        payload: result,
      }))
      .catch(err => this.ngRedux.dispatch({
        type: UsersActions.USERS_FETCH_ERROR,
        payload: { errorCode: err.status },
      }));
  }

  invite(user) {
    this.ngRedux.dispatch({
      type: UsersActions.USERS_INVITE_PENDING,
    });

    this.invitesService.save({ invited: user._id })
      .then(result => this.ngRedux.dispatch({
        type: UsersActions.USERS_INVITE_SUCCESS,
        payload: result,
      }))
      .catch(err => this.ngRedux.dispatch({
        type: UsersActions.USERS_INVITE_ERROR,
        payload: { errorCode: err.status },
      }));
  }

  follow(circleId, user) {
    this.ngRedux.dispatch({
      type: UsersActions.USERS_FOLLOW_PENDING,
    });

    this.usersService.follow(circleId, user)
      .then(result => this.ngRedux.dispatch({
        type: UsersActions.USERS_FOLLOW_SUCCESS,
        payload: result,
      }))
      .catch(err => this.ngRedux.dispatch({
        type: UsersActions.USERS_FOLLOW_ERROR,
        payload: { errorCode: err.status },
      }));
  }

  showFollowModal(user) {
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
