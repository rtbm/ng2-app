import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';
import { ProfileService } from '../services/profile';

@Injectable()
export class ProfileActions {
  static PROFILE_FETCH_PENDING = 'PROFILE_FETCH_PENDING';
  static PROFILE_FETCH_SUCCESS = 'PROFILE_FETCH_SUCCESS';
  static PROFILE_FETCH_ERROR = 'PROFILE_FETCH_ERROR';

  static PROFILE_SAVE_PENDING = 'PROFILE_SAVE_PENDING';
  static PROFILE_SAVE_SUCCESS = 'PROFILE_SAVE_SUCCESS';
  static PROFILE_SAVE_ERROR = 'PROFILE_SAVE_ERROR';

  constructor(private ngRedux: NgRedux<IAppState>,
              private profileService: ProfileService) {
  }

  readProfile(id) {
    this.ngRedux.dispatch({
      type: ProfileActions.PROFILE_FETCH_PENDING,
    });

    this.profileService.read(id)
      .then(result => this.ngRedux.dispatch({
        type: ProfileActions.PROFILE_FETCH_SUCCESS,
        payload: result,
      }))
      .catch(err => this.ngRedux.dispatch({
        type: ProfileActions.PROFILE_FETCH_ERROR,
        payload: { errorCode: err.status },
      }));
  }

  updateProfile(id, profile) {
    this.ngRedux.dispatch({
      type: ProfileActions.PROFILE_SAVE_PENDING,
      payload: profile,
    });

    this.profileService.update(id, profile)
      .then(result => {
        this.ngRedux.dispatch({
          type: ProfileActions.PROFILE_SAVE_SUCCESS,
          payload: result,
        });
      })
      .catch(err => this.ngRedux.dispatch({
        type: ProfileActions.PROFILE_SAVE_ERROR,
        payload: { errorCode: err.status },
      }));
  }
}
