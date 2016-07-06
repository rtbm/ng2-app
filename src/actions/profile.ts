import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';
import { ProfileService } from '../services/profile';

@Injectable()
export class ProfileActions {
  static PROFILE_FETCH_PENDING = 'PROFILE_FETCH_PENDING';
  static PROFILE_FETCH_SUCCESS = 'PROFILE_FETCH_SUCCESS';
  static PROFILE_FETCH_ERROR = 'PROFILE_FETCH_ERROR';

  static PROFILE_UPDATE_PENDING = 'PROFILE_UPDATE_PENDING';
  static PROFILE_UPDATE_SUCCESS = 'PROFILE_UPDATE_SUCCESS';
  static PROFILE_UPDATE_ERROR = 'PROFILE_UPDATE_ERROR';

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
      type: ProfileActions.PROFILE_UPDATE_PENDING,
      payload: profile,
    });

    this.profileService.update(id, profile)
      .then(result => {
        this.ngRedux.dispatch({
          type: ProfileActions.PROFILE_UPDATE_SUCCESS,
          payload: result,
        });
      })
      .catch(err => this.ngRedux.dispatch({
        type: ProfileActions.PROFILE_UPDATE_ERROR,
        payload: { errorCode: err.status },
      }));
  }
}
