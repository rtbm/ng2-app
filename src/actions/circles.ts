import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';
import { CirclesService } from '../services/circles';

@Injectable()
export class CirclesActions {
  static CIRCLES_CIRCLES_FETCH_PENDING = 'CIRCLES_CIRCLES_FETCH_PENDING';
  static CIRCLES_CIRCLES_FETCH_SUCCESS = 'CIRCLES_CIRCLES_FETCH_SUCCESS';
  static CIRCLES_CIRCLES_FETCH_ERROR = 'CIRCLES_CIRCLES_FETCH_ERROR';

  static CIRCLES_CIRCLE_SAVE_PENDING = 'CIRCLES_CIRCLE_SAVE_PENDING';
  static CIRCLES_CIRCLE_SAVE_SUCCESS = 'CIRCLES_CIRCLE_SAVE_SUCCESS';
  static CIRCLES_CIRCLE_SAVE_ERROR = 'CIRCLES_CIRCLE_SAVE_ERROR';

  constructor(private ngRedux: NgRedux<IAppState>,
              private circlesService: CirclesService) {
  }

  fetchCircles() {
    this.ngRedux.dispatch({
      type: CirclesActions.CIRCLES_CIRCLES_FETCH_PENDING,
    });

    this.circlesService.fetchAll()
      .then(result => this.ngRedux.dispatch({
        type: CirclesActions.CIRCLES_CIRCLES_FETCH_SUCCESS,
        payload: result,
      }))
      .catch(err => this.ngRedux.dispatch({
        type: CirclesActions.CIRCLES_CIRCLES_FETCH_ERROR,
        payload: { errorCode: err.status },
      }));
  }

  saveCircle(circle) {
    this.ngRedux.dispatch({
      type: CirclesActions.CIRCLES_CIRCLE_SAVE_PENDING,
      payload: circle,
    });

    this.circlesService.save(circle)
      .then(result => {
        this.ngRedux.dispatch({
          type: CirclesActions.CIRCLES_CIRCLE_SAVE_SUCCESS,
          payload: result,
        });
        this.fetchCircles();
      })
      .catch(err => this.ngRedux.dispatch({
        type: CirclesActions.CIRCLES_CIRCLE_SAVE_ERROR,
        payload: { errorCode: err.status },
      }));
  }
}
