import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';
import { CirclesService } from '../services/circles';

@Injectable()
export class CirclesActions {
  static CIRCLES_FETCH_PENDING = 'CIRCLES_FETCH_PENDING';
  static CIRCLES_FETCH_SUCCESS = 'CIRCLES_FETCH_SUCCESS';
  static CIRCLES_FETCH_ERROR = 'CIRCLES_FETCH_ERROR';

  static CIRCLE_SAVE_PENDING = 'CIRCLE_SAVE_PENDING';
  static CIRCLE_SAVE_SUCCESS = 'CIRCLE_SAVE_SUCCESS';
  static CIRCLE_SAVE_ERROR = 'CIRCLE_SAVE_ERROR';

  static CIRCLE_UPDATE_MODAL = 'CIRCLE_UPDATE_MODAL';
  static CIRCLE_UPDATE_MODAL_CANCEL = 'CIRCLE_UPDATE_MODAL_CANCEL';
  static CIRCLE_UPDATE_FETCH_PENDING = 'CIRCLE_UPDATE_FETCH_PENDING';
  static CIRCLE_UPDATE_FETCH_SUCCESS = 'CIRCLE_UPDATE_FETCH_SUCCESS';
  static CIRCLE_UPDATE_FETCH_ERROR = 'CIRCLE_UPDATE_FETCH_ERROR';

  static CIRCLE_UPDATE_PENDING = 'CIRCLE_UPDATE_PENDING';
  static CIRCLE_UPDATE_SUCCESS = 'CIRCLE_UPDATE_SUCCESS';
  static CIRCLE_UPDATE_ERROR = 'CIRCLE_UPDATE_ERROR';

  static CIRCLE_REMOVE_PENDING = 'CIRCLE_REMOVE_PENDING';
  static CIRCLE_REMOVE_SUCCESS = 'CIRCLE_REMOVE_SUCCESS';
  static CIRCLE_REMOVE_ERROR = 'CIRCLE_REMOVE_ERROR';

  static CIRCLE_REMOVE_CONFIRM = 'CIRCLE_REMOVE_CONFIRM';
  static CIRCLE_REMOVE_CONFIRM_CANCEL = 'CIRCLE_REMOVE_CONFIRM_CANCEL';

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

  saveCircle(circle) {
    this.ngRedux.dispatch({
      type: CirclesActions.CIRCLE_SAVE_PENDING,
      payload: circle,
    });

    this.circlesService.save(circle)
      .then(result => {
        this.ngRedux.dispatch({
          type: CirclesActions.CIRCLE_SAVE_SUCCESS,
          payload: result,
        });
        this.fetchCircles();
      })
      .catch(err => this.ngRedux.dispatch({
        type: CirclesActions.CIRCLE_SAVE_ERROR,
        payload: { errorCode: err.status },
      }));
  }

  removeCircle(circle) {
    this.ngRedux.dispatch({
      type: CirclesActions.CIRCLE_REMOVE_PENDING,
      payload: circle,
    });

    this.circlesService.remove(circle._id)
      .then(result => {
        this.ngRedux.dispatch({
          type: CirclesActions.CIRCLE_REMOVE_SUCCESS,
          payload: result,
        });
        this.fetchCircles();
      })
      .catch(err => this.ngRedux.dispatch({
        type: CirclesActions.CIRCLE_REMOVE_ERROR,
        payload: { errorCode: err.status },
      }));
  }

  showRemoveCircleConfirm(circle) {
    this.ngRedux.dispatch({
      type: CirclesActions.CIRCLE_REMOVE_CONFIRM,
      payload: circle,
    });
  }

  removeCircleConfirmCancel() {
    this.ngRedux.dispatch({
      type: CirclesActions.CIRCLE_REMOVE_CONFIRM_CANCEL,
    });
  }

  showUpdateCircleModal(circle) {
    this.ngRedux.dispatch({
      type: CirclesActions.CIRCLE_UPDATE_FETCH_PENDING,
    });

    this.circlesService.read(circle._id)
      .then(result => {
        this.ngRedux.dispatch({
          type: CirclesActions.CIRCLE_UPDATE_FETCH_SUCCESS,
          payload: result,
        });
        this.ngRedux.dispatch({
          type: CirclesActions.CIRCLE_UPDATE_MODAL,
        });
      })
      .catch(err => this.ngRedux.dispatch({
        type: CirclesActions.CIRCLE_UPDATE_FETCH_ERROR,
        payload: { errorCode: err.status },
      }));
  }

  updateCircleModalCancel() {
    this.ngRedux.dispatch({
      type: CirclesActions.CIRCLE_UPDATE_MODAL_CANCEL,
    });
  }

  updateCircle(circle) {
    this.ngRedux.dispatch({
      type: CirclesActions.CIRCLE_UPDATE_PENDING,
      payload: circle,
    });

    this.circlesService.update(circle._id, circle)
      .then(result => {
        this.ngRedux.dispatch({
          type: CirclesActions.CIRCLE_UPDATE_SUCCESS,
          payload: result,
        });
        this.fetchCircles();
      })
      .catch(err => this.ngRedux.dispatch({
        type: CirclesActions.CIRCLE_UPDATE_ERROR,
        payload: { errorCode: err.status },
      }));
  }
}
