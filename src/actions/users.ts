import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';
import { UsersService } from '../services/users';

@Injectable()
export class UsersActions {
  static USERS_FETCH_PENDING = 'USERS_FETCH_PENDING';
  static USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS';
  static USERS_FETCH_ERROR = 'USERS_FETCH_ERROR';

  constructor(private ngRedux: NgRedux<IAppState>,
              private usersService: UsersService) {
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
}
