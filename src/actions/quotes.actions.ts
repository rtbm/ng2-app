import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../state';

@Injectable()
export class QuotesActions {
  static QUOTES_FETCH = 'QUOTES_FETCH';
  static QUOTES_FETCH_SUCCESS = 'QUOTES_FETCH_SUCCESS';
  static QUOTES_FETCH_ERROR = 'QUOTES_FETCH_ERROR';

  static QUOTE_SAVE_MODAL = 'QUOTE_SAVE_MODAL';
  static QUOTE_SAVE_MODAL_CANCEL = 'QUOTE_SAVE_MODAL_CANCEL';

  static QUOTE_SAVE = 'QUOTE_SAVE';
  static QUOTE_SAVE_SUCCESS = 'QUOTE_SAVE_SUCCESS';
  static QUOTE_SAVE_ERROR = 'QUOTE_SAVE_ERROR';

  static QUOTE_UPDATE_MODAL = 'QUOTE_UPDATE_MODAL';
  static QUOTE_UPDATE_MODAL_SUCCESS = 'QUOTE_UPDATE_MODAL_SUCCESS';
  static QUOTE_UPDATE_MODAL_ERROR = 'QUOTE_UPDATE_MODAL_ERROR';
  static QUOTE_UPDATE_MODAL_CANCEL = 'QUOTE_UPDATE_MODAL_CANCEL';

  static QUOTE_UPDATE = 'QUOTE_UPDATE';
  static QUOTE_UPDATE_SUCCESS = 'QUOTE_UPDATE_SUCCESS';
  static QUOTE_UPDATE_ERROR = 'QUOTE_UPDATE_ERROR';

  static QUOTE_REMOVE = 'QUOTE_REMOVE';
  static QUOTE_REMOVE_SUCCESS = 'QUOTE_REMOVE_SUCCESS';
  static QUOTE_REMOVE_ERROR = 'QUOTE_REMOVE_ERROR';

  static QUOTE_REMOVE_CONFIRM = 'QUOTE_REMOVE_CONFIRM';
  static QUOTE_REMOVE_CONFIRM_CANCEL = 'QUOTE_REMOVE_CONFIRM_CANCEL';

  static QUOTE_RECOMMEND = 'QUOTE_RECOMMEND';
  static QUOTE_RECOMMEND_SUCCESS = 'QUOTE_RECOMMEND_SUCCESS';
  static QUOTE_RECOMMEND_ERROR = 'QUOTE_RECOMMEND_ERROR';

  static QUOTE_UNRECOMMEND = 'QUOTE_UNRECOMMEND';
  static QUOTE_UNRECOMMEND_SUCCESS = 'QUOTE_UNRECOMMEND_SUCCESS';
  static QUOTE_UNRECOMMEND_ERROR = 'QUOTE_UNRECOMMEND_ERROR';

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  fetchQuotes() {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTES_FETCH,
    });
  }

  saveQuoteModal() {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTE_SAVE_MODAL,
    });
  }

  saveQuoteModalCancel() {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTE_SAVE_MODAL_CANCEL,
    });
  }

  saveQuote(quote) {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTE_SAVE,
      payload: quote,
    });
  }

  removeQuoteConfirm(quote) {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTE_REMOVE_CONFIRM,
      payload: quote,
    });
  }

  removeQuoteConfirmCancel() {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTE_REMOVE_CONFIRM_CANCEL,
    });
  }

  removeQuote(quote) {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTE_REMOVE,
      payload: quote,
    });
  }

  updateQuoteModal(quote) {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTE_UPDATE_MODAL,
      payload: quote,
    });
  }

  updateQuoteCancel() {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTE_UPDATE_MODAL_CANCEL,
    });
  }

  updateQuote(quote) {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTE_UPDATE,
      payload: quote,
    });
  }

  recommendQuote(quote) {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTE_RECOMMEND,
      payload: quote,
    });
  }

  unrecommendQuote(quote) {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTE_UNRECOMMEND,
      payload: quote,
    });
  }
}
