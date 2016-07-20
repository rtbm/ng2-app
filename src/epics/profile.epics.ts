import { Injectable } from '@angular/core';
import { ActionsObservable } from 'redux-observable';
import { ProfileActions } from '../actions';
import { Observable } from 'rxjs';
import { UsersService } from '../services';

@Injectable()
export class ProfileEpics {
  constructor(private usersService: UsersService) {
  }

  fetchUser = (action$: ActionsObservable) => {
    return action$.ofType(ProfileActions.USER_FETCH)
      .flatMap(({payload}) => {
        return this.usersService.read(payload)
          .map(result => ({
            type: ProfileActions.USER_FETCH_SUCCESS,
            payload: result,
          }))
          .catch(error => Observable.of({
            type: ProfileActions.USER_FETCH_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  };

  updateUser = (action$: ActionsObservable) => {
    return action$.ofType(ProfileActions.USER_UPDATE)
      .flatMap(({payload}) => {
        return this.usersService.update(payload._id, payload)
          .map(result => ({
            type: ProfileActions.USER_UPDATE_SUCCESS,
            payload: result,
          }))
          .catch(error => Observable.of({
            type: ProfileActions.USER_UPDATE_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  }
}
