import { Injectable } from '@angular/core';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { CirclesActions } from '../actions';
import { CirclesService } from '../services';

@Injectable()
export class CirclesEpics {
  constructor(private circlesService: CirclesService) {
  }

  fetchCircles = (action$: ActionsObservable) => {
    return action$.ofType(CirclesActions.CIRCLES_FETCH)
      .flatMap(() => {
        return this.circlesService.fetchAll()
          .map(result => ({
            type: CirclesActions.CIRCLES_FETCH_SUCCESS,
            payload: result,
          }))
          .catch(error => Observable.of({
            type: CirclesActions.CIRCLES_FETCH_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  };

  saveCircle = (action$: ActionsObservable) => {
    return action$.ofType(CirclesActions.CIRCLE_SAVE)
      .flatMap(({payload}) => {
        return this.circlesService.save(payload)
          .map(result => ({
            type: CirclesActions.CIRCLE_SAVE_SUCCESS,
            payload: result,
          }))
          .catch(error => Observable.of({
            type: CirclesActions.CIRCLE_SAVE_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  };

  updateCircleModal = (action$: ActionsObservable) => {
    return action$.ofType(CirclesActions.CIRCLE_UPDATE_MODAL)
      .flatMap(({payload}) => {
        return this.circlesService.read(payload._id)
          .map(result => ({
            type: CirclesActions.CIRCLE_UPDATE_MODAL_SUCCESS,
            payload: result,
          }))
          .catch(error => Observable.of({
            type: CirclesActions.CIRCLE_UPDATE_MODAL_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  };

  updateCircle = (action$: ActionsObservable) => {
    return action$.ofType(CirclesActions.CIRCLE_UPDATE)
      .flatMap(({payload}) => {
        return this.circlesService.update(payload._id, payload)
          .map(result => ({
            type: CirclesActions.CIRCLE_UPDATE_SUCCESS,
            payload: result,
          }))
          .catch(error => Observable.of({
            type: CirclesActions.CIRCLE_UPDATE_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  };

  removeCircle = (action$: ActionsObservable) => {
    return action$.ofType(CirclesActions.CIRCLE_REMOVE)
      .flatMap(({payload}) => {
        return this.circlesService.remove(payload._id)
          .map(result => ({
            type: CirclesActions.CIRCLE_REMOVE_SUCCESS,
            payload: result,
          }))
          .catch(error => Observable.of({
            type: CirclesActions.CIRCLE_REMOVE_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  };
}

