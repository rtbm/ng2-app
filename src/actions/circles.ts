import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';
import { CirclesService } from '../services/circles';

@Injectable()
export class CirclesActions {
  static CIRCLES_FETCH_PENDING = 'CIRCLES_FETCH_PENDING';
  static CIRCLES_FETCH_SUCCESS = 'CIRCLES_FETCH_SUCCESS';
  static CIRCLES_FETCH_ERROR = 'CIRCLES_FETCH_ERROR';

  constructor(private ngRedux: NgRedux<IAppState>,
              private circlesService: CirclesService) {
  }

  fetchCircles() {
    this.ngRedux.dispatch({
      type: CirclesActions.CIRCLES_FETCH_PENDING,
    });

    this.circlesService.fetchAll()
      .then(result => this.ngRedux.dispatch({
        type: CirclesActions.CIRCLES_FETCH_SUCCESS,
        payload: result,
      }))
      .catch(err => this.ngRedux.dispatch({
        type: CirclesActions.CIRCLES_FETCH_ERROR,
        payload: { errorCode: err.status },
      }));
  }
}
