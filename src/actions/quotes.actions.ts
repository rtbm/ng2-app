import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';
import { QuotesService } from '../services/quotes.service';

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

  constructor(private ngRedux: NgRedux<IAppState>,
              private quotesService: QuotesService) {
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

  saveQuote(circle) {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTE_SAVE,
      payload: circle,
    });
  }

  removeQuoteConfirm(circle) {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTE_REMOVE_CONFIRM,
      payload: circle,
    });
  }

  removeQuoteConfirmCancel() {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTE_REMOVE_CONFIRM_CANCEL,
    });
  }

  removeQuote(circle) {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTE_REMOVE,
      payload: circle,
    });
  }

  updateQuoteModal(circle) {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTE_UPDATE_MODAL,
      payload: circle,
    });
  }

  updateQuoteCancel() {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTE_UPDATE_MODAL_CANCEL,
    });
  }

  updateQuote(circle) {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTE_UPDATE,
      payload: circle,
    });
  }
}
