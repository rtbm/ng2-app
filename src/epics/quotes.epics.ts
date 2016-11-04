import { Injectable } from '@angular/core';
import { QuotesActions, IPayloadAction } from '../actions';
import { Observable } from 'rxjs';
import { QuotesService } from '../services';

@Injectable()
export class QuotesEpics {
  constructor(private quotesService: QuotesService) {
  }

  fetchQuotes = (action$: Observable<IPayloadAction>) => action$
    .filter(({ type }) => type === QuotesActions.QUOTES_FETCH)
    .flatMap(({ payload }) => this.quotesService.fetchAll(payload)
      .map(result => ({
        type: QuotesActions.QUOTES_FETCH_SUCCESS,
        payload: result,
      }))
      .catch(error => Observable.of({
        type: QuotesActions.QUOTES_FETCH_ERROR,
        payload: { errorCode: error.status },
      })));

  saveQuote = (action$: Observable<IPayloadAction>) => action$
    .filter(({ type }) => type === QuotesActions.QUOTE_SAVE)
    .flatMap(({ payload }) => this.quotesService.save(payload)
      .map(result => ({
        type: QuotesActions.QUOTE_SAVE_SUCCESS,
        payload: result,
      }))
      .catch(error => Observable.of({
        type: QuotesActions.QUOTE_SAVE_ERROR,
        payload: { errorCode: error.status },
      })));

  updateQuoteModal = (action$: Observable<IPayloadAction>) => action$
    .filter(({ type }) => type === QuotesActions.QUOTE_UPDATE_MODAL)
    .flatMap(({ payload }) => this.quotesService.read(payload._id)
      .map(result => ({
        type: QuotesActions.QUOTE_UPDATE_MODAL_SUCCESS,
        payload: result,
      }))
      .catch(error => Observable.of({
        type: QuotesActions.QUOTE_UPDATE_MODAL_ERROR,
        payload: { errorCode: error.status },
      })));

  updateQuote = (action$: Observable<IPayloadAction>) => action$
    .filter(({ type }) => type === QuotesActions.QUOTE_UPDATE)
    .flatMap(({ payload }) => this.quotesService.update(payload._id, payload)
      .map(result => ({
        type: QuotesActions.QUOTE_UPDATE_SUCCESS,
        payload: result,
      }))
      .catch(error => Observable.of({
        type: QuotesActions.QUOTE_UPDATE_ERROR,
        payload: { errorCode: error.status },
      })));

  removeQuote = (action$: Observable<IPayloadAction>) => action$
    .filter(({ type }) => type === QuotesActions.QUOTE_REMOVE)
    .flatMap(({ payload }) => this.quotesService.remove(payload._id)
      .map(result => ({
        type: QuotesActions.QUOTE_REMOVE_SUCCESS,
        payload: result,
      }))
      .catch(error => Observable.of({
        type: QuotesActions.QUOTE_REMOVE_ERROR,
        payload: { errorCode: error.status },
      })));

  recommendQuote = (action$: Observable<IPayloadAction>) => action$
    .filter(({ type }) => type === QuotesActions.QUOTE_RECOMMEND)
    .flatMap(({ payload }) => this.quotesService.recommend(payload)
      .map(result => ({
        type: QuotesActions.QUOTE_RECOMMEND_SUCCESS,
        payload: result,
      }))
      .catch(error => Observable.of({
        type: QuotesActions.QUOTE_RECOMMEND_ERROR,
        payload: { errorCode: error.status },
      })));

  unrecommendQuote = (action$: Observable<IPayloadAction>) => action$
    .filter(({ type }) => type === QuotesActions.QUOTE_UNRECOMMEND)
    .flatMap(({ payload }) => this.quotesService.unrecommend(payload)
      .map(result => ({
        type: QuotesActions.QUOTE_UNRECOMMEND_SUCCESS,
        payload: result,
      }))
      .catch(error => Observable.of({
        type: QuotesActions.QUOTE_UNRECOMMEND_ERROR,
        payload: { errorCode: error.status },
      })));
}
