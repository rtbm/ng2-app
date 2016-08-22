import { Injectable } from '@angular/core';
import { QuotesActions, IPayloadAction } from '../actions';
import { Observable } from 'rxjs';
import { QuotesService } from '../services';

@Injectable()
export class QuotesEpics {
  constructor(private quotesService: QuotesService) {
  }

  fetchQuotes = (action$: Observable<IPayloadAction>) => {
    return action$.filter(({type}) => type === QuotesActions.QUOTES_FETCH)
      .flatMap(() => {
        return this.quotesService.fetchAll()
          .map(result => {
            return {
              type: QuotesActions.QUOTES_FETCH_SUCCESS,
              payload: result,
            };
          })
          .catch(error => Observable.of({
            type: QuotesActions.QUOTES_FETCH_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  };

  saveQuote = (action$: Observable<IPayloadAction>) => {
    return action$.filter(({type}) => type === QuotesActions.QUOTE_SAVE)
      .flatMap(({payload}) => {
        return this.quotesService.save(payload)
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

  updateQuoteModal = (action$: Observable<IPayloadAction>) => {
    return action$.filter(({type}) => type === QuotesActions.QUOTE_UPDATE_MODAL)
      .flatMap(({payload}) => {
        return this.quotesService.read(payload._id)
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

  updateQuote = (action$: Observable<IPayloadAction>) => {
    return action$.filter(({type}) => type === QuotesActions.QUOTE_UPDATE)
      .flatMap(({payload}) => {
        return this.quotesService.update(payload._id, payload)
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

  removeQuote = (action$: Observable<IPayloadAction>) => {
    return action$.filter(({type}) => type === QuotesActions.QUOTE_REMOVE)
      .flatMap(({payload}) => {
        return this.quotesService.remove(payload._id)
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

  recommendQuote = (action$: Observable<IPayloadAction>) => {
    return action$.filter(({type}) => type === QuotesActions.QUOTE_RECOMMEND)
      .flatMap(({payload}) => {
        return this.quotesService.recommend(payload)
          .map(result => ({
            type: QuotesActions.QUOTE_RECOMMEND_SUCCESS,
            payload: result,
          }))
          .catch(error => Observable.of({
            type: QuotesActions.QUOTE_RECOMMEND_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  };

  unrecommendQuote = (action$: Observable<IPayloadAction>) => {
    return action$.filter(({type}) => type === QuotesActions.QUOTE_UNRECOMMEND)
      .flatMap(({payload}) => {
        return this.quotesService.unrecommend(payload)
          .map(result => ({
            type: QuotesActions.QUOTE_UNRECOMMEND_SUCCESS,
            payload: result,
          }))
          .catch(error => Observable.of({
            type: QuotesActions.QUOTE_UNRECOMMEND_ERROR,
            payload: { errorCode: error.status },
          }));
      });
  };
}
