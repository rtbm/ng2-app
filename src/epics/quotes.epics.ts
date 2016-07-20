import { Injectable } from '@angular/core';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { QuotesActions } from '../actions';
import { QuotesService } from '../services';

@Injectable()
export class QuotesEpics {
  constructor(private circlesService: QuotesService) {
  }

  fetchQuotes = (action$: ActionsObservable) => {
    return action$.ofType(QuotesActions.QUOTES_FETCH)
      .flatMap(() => {
        return this.circlesService.fetchAll()
          .map(result => ({
            type: QuotesActions.QUOTES_FETCH_SUCCESS,
            payload: result,
          }))
          .catch(error => Observable.of({
            type: QuotesActions.QUOTES_FETCH_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  };

  saveQuote = (action$: ActionsObservable) => {
    return action$.ofType(QuotesActions.QUOTE_SAVE)
      .flatMap(({payload}) => {
        return this.circlesService.save(payload)
          .map(result => ({
            type: QuotesActions.QUOTE_SAVE_SUCCESS,
            payload: result,
          }))
          .catch(error => Observable.of({
            type: QuotesActions.QUOTE_SAVE_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  };

  updateQuoteModal = (action$: ActionsObservable) => {
    return action$.ofType(QuotesActions.QUOTE_UPDATE_MODAL)
      .flatMap(({payload}) => {
        return this.circlesService.read(payload._id)
          .map(result => ({
            type: QuotesActions.QUOTE_UPDATE_MODAL_SUCCESS,
            payload: result,
          }))
          .catch(error => Observable.of({
            type: QuotesActions.QUOTE_UPDATE_MODAL_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  };

  updateQuote = (action$: ActionsObservable) => {
    return action$.ofType(QuotesActions.QUOTE_UPDATE)
      .flatMap(({payload}) => {
        return this.circlesService.update(payload._id, payload)
          .map(result => ({
            type: QuotesActions.QUOTE_UPDATE_SUCCESS,
            payload: result,
          }))
          .catch(error => Observable.of({
            type: QuotesActions.QUOTE_UPDATE_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  };

  removeQuote = (action$: ActionsObservable) => {
    return action$.ofType(QuotesActions.QUOTE_REMOVE)
      .flatMap(({payload}) => {
        return this.circlesService.remove(payload._id)
          .map(result => ({
            type: QuotesActions.QUOTE_REMOVE_SUCCESS,
            payload: result,
          }))
          .catch(error => Observable.of({
            type: QuotesActions.QUOTE_REMOVE_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  };
}

