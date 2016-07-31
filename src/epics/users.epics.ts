import { Injectable } from '@angular/core';
import { ActionsObservable } from 'redux-observable';
import { UsersActions } from '../actions';
import { Observable } from 'rxjs';
import { UsersService } from '../services';

@Injectable()
export class UsersEpics {
  constructor(private usersService: UsersService) {
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

  followUser = (action$: ActionsObservable) => {
    return action$.ofType(UsersActions.USERS_FOLLOW)
      .flatMap(({payload}) => {
        return this.usersService.follow(payload.user, payload.circles)
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
