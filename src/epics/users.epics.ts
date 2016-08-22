import { Injectable } from '@angular/core';
import { UsersActions, IPayloadAction } from '../actions';
import { Observable } from 'rxjs';
import { UsersService } from '../services';

@Injectable()
export class UsersEpics {
  constructor(private usersService: UsersService) {
  }

  fetchUsers = (action$: Observable<IPayloadAction>) => action$
    .filter(({ type }) => type === UsersActions.USERS_FETCH)
    .flatMap(({ payload }) => this.usersService.fetchAll(payload.filter)
      .map(result => ({
        type: UsersActions.USERS_FETCH_SUCCESS,
        payload: result,
      }))
      .catch(error => Observable.of({
        type: UsersActions.USERS_FETCH_ERROR,
        payload: { errorCode: error.status },
      })));

  followUser = (action$: Observable<IPayloadAction>) => action$
    .filter(({ type }) => type === UsersActions.USERS_FOLLOW)
    .flatMap(({ payload }) => this.usersService.follow(payload.user)
      .map(result => ({
        type: UsersActions.USERS_FOLLOW_SUCCESS,
        payload: result,
      }))
      .catch(error => Observable.of({
        type: UsersActions.USERS_FOLLOW_ERROR,
        payload: { errorCode: error.status },
      })));

  unfollowUser = (action$: Observable<IPayloadAction>) => action$
    .filter(({ type }) => type === UsersActions.USERS_UNFOLLOW)
    .flatMap(({ payload }) => this.usersService.unfollow(payload.user)
      .map(result => ({
        type: UsersActions.USERS_UNFOLLOW_SUCCESS,
        payload: result,
      }))
      .catch(error => Observable.of({
        type: UsersActions.USERS_UNFOLLOW_ERROR,
        payload: { errorCode: error.status },
      })));
}
