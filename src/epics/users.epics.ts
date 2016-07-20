import { Injectable } from '@angular/core';
import { ActionsObservable } from 'redux-observable';
import { UsersActions } from '../actions';
import { Observable } from 'rxjs';
import { UsersService, InvitesService } from '../services';

@Injectable()
export class UsersEpics {
  constructor(private usersService: UsersService,
              private invitesService: InvitesService) {
  }

  fetchUsers = (action$: ActionsObservable) => {
    return action$.ofType(UsersActions.USERS_FETCH)
      .flatMap(() => {
        return this.usersService.fetchAll()
          .map(result => ({
            type: UsersActions.USERS_FETCH_SUCCESS,
            payload: result,
          }))
          .catch(error => Observable.of({
            type: UsersActions.USERS_FETCH_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  };

  inviteUser = (action$: ActionsObservable) => {
    return action$.ofType(UsersActions.USERS_INVITE)
      .flatMap(({payload}) => {
        return this.invitesService.save({ invited: payload._id })
          .map(result => ({
            type: UsersActions.USERS_INVITE_SUCCESS,
            payload: result,
          }))
          .catch(error => Observable.of({
            type: UsersActions.USERS_INVITE_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  };

  followUser = (action$: ActionsObservable) => {
    return action$.ofType(UsersActions.USERS_FOLLOW)
      .flatMap(({payload}) => {
        return this.usersService.follow(payload.circleId, payload.user)
          .map(result => ({
            type: UsersActions.USERS_FOLLOW_SUCCESS,
            payload: result,
          }))
          .catch(error => Observable.of({
            type: UsersActions.USERS_FOLLOW_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  };
}
