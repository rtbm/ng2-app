import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';
import { CirclesService } from '../services/circles.service';

@Injectable()
export class CirclesActions {
  static CIRCLES_FETCH = 'CIRCLES_FETCH';
  static CIRCLES_FETCH_SUCCESS = 'CIRCLES_FETCH_SUCCESS';
  static CIRCLES_FETCH_ERROR = 'CIRCLES_FETCH_ERROR';

  static CIRCLE_SAVE_MODAL = 'CIRCLE_SAVE_MODAL';
  static CIRCLE_SAVE_MODAL_CANCEL = 'CIRCLE_SAVE_MODAL_CANCEL';

  static CIRCLE_SAVE = 'CIRCLE_SAVE';
  static CIRCLE_SAVE_SUCCESS = 'CIRCLE_SAVE_SUCCESS';
  static CIRCLE_SAVE_ERROR = 'CIRCLE_SAVE_ERROR';

  static CIRCLE_UPDATE_MODAL = 'CIRCLE_UPDATE_MODAL';
  static CIRCLE_UPDATE_MODAL_SUCCESS = 'CIRCLE_UPDATE_MODAL_SUCCESS';
  static CIRCLE_UPDATE_MODAL_ERROR = 'CIRCLE_UPDATE_MODAL_ERROR';
  static CIRCLE_UPDATE_MODAL_CANCEL = 'CIRCLE_UPDATE_MODAL_CANCEL';

  static CIRCLE_UPDATE = 'CIRCLE_UPDATE';
  static CIRCLE_UPDATE_SUCCESS = 'CIRCLE_UPDATE_SUCCESS';
  static CIRCLE_UPDATE_ERROR = 'CIRCLE_UPDATE_ERROR';

  static CIRCLE_REMOVE = 'CIRCLE_REMOVE';
  static CIRCLE_REMOVE_SUCCESS = 'CIRCLE_REMOVE_SUCCESS';
  static CIRCLE_REMOVE_ERROR = 'CIRCLE_REMOVE_ERROR';

  static CIRCLE_REMOVE_CONFIRM = 'CIRCLE_REMOVE_CONFIRM';
  static CIRCLE_REMOVE_CONFIRM_CANCEL = 'CIRCLE_REMOVE_CONFIRM_CANCEL';

  constructor(private ngRedux: NgRedux<IAppState>,
              private circlesService: CirclesService) {
  }

  fetchCircles() {
    this.ngRedux.dispatch({
      type: CirclesActions.CIRCLES_FETCH,
    });
  }

  saveCircleModal() {
    this.ngRedux.dispatch({
      type: CirclesActions.CIRCLE_SAVE_MODAL,
    });
  }

  saveCircleModalCancel() {
    this.ngRedux.dispatch({
      type: CirclesActions.CIRCLE_SAVE_MODAL_CANCEL,
    });
  }

  saveCircle(circle) {
    this.ngRedux.dispatch({
      type: CirclesActions.CIRCLE_SAVE,
      payload: circle,
    });
  }

  removeCircleConfirm(circle) {
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

  removeCircle(circle) {
    this.ngRedux.dispatch({
      type: CirclesActions.CIRCLE_REMOVE,
      payload: circle,
    });
  }

  updateCircleModal(circle) {
    this.ngRedux.dispatch({
      type: CirclesActions.CIRCLE_UPDATE_MODAL,
      payload: circle,
    });
  }

  updateCircleModalCancel() {
    this.ngRedux.dispatch({
      type: CirclesActions.CIRCLE_UPDATE_MODAL_CANCEL,
    });
  }

  updateCircle(circle) {
    this.ngRedux.dispatch({
      type: CirclesActions.CIRCLE_UPDATE,
      payload: circle,
    });
  }
}
