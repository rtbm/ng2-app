import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';
import { QuotesService } from '../services/quotes';

@Injectable()
export class QuotesActions {
  static QUOTES_FETCH_PENDING = 'QUOTES_FETCH_PENDING';
  static QUOTES_FETCH_SUCCESS = 'QUOTES_FETCH_SUCCESS';
  static QUOTES_FETCH_ERROR = 'QUOTES_FETCH_ERROR';

  static QUOTE_SAVE_PENDING = 'QUOTE_SAVE_PENDING';
  static QUOTE_SAVE_SUCCESS = 'QUOTE_SAVE_SUCCESS';
  static QUOTE_SAVE_ERROR = 'QUOTE_SAVE_ERROR';

  static QUOTE_UPDATE_MODAL = 'QUOTE_UPDATE_MODAL';
  static QUOTE_UPDATE_MODAL_CANCEL = 'QUOTE_UPDATE_MODAL_CANCEL';
  static QUOTE_UPDATE_FETCH_PENDING = 'QUOTE_UPDATE_FETCH_PENDING';
  static QUOTE_UPDATE_FETCH_SUCCESS = 'QUOTE_UPDATE_FETCH_SUCCESS';
  static QUOTE_UPDATE_FETCH_ERROR = 'QUOTE_UPDATE_FETCH_ERROR';

  static QUOTE_UPDATE_PENDING = 'QUOTE_UPDATE_PENDING';
  static QUOTE_UPDATE_SUCCESS = 'QUOTE_UPDATE_SUCCESS';
  static QUOTE_UPDATE_ERROR = 'QUOTE_UPDATE_ERROR';

  static QUOTE_REMOVE_PENDING = 'QUOTE_REMOVE_PENDING';
  static QUOTE_REMOVE_SUCCESS = 'QUOTE_REMOVE_SUCCESS';
  static QUOTE_REMOVE_ERROR = 'QUOTE_REMOVE_ERROR';

  static QUOTE_REMOVE_CONFIRM = 'QUOTE_REMOVE_CONFIRM';
  static QUOTE_REMOVE_CONFIRM_CANCEL = 'QUOTE_REMOVE_CONFIRM_CANCEL';

  constructor(private ngRedux: NgRedux<IAppState>,
              private quotesService: QuotesService) {
  }

  fetchQuotes() {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTES_FETCH_PENDING,
    });

    this.quotesService.fetchAll()
      .then(result => this.ngRedux.dispatch({
        type: QuotesActions.QUOTES_FETCH_SUCCESS,
        payload: result,
      }))
      .catch(err => this.ngRedux.dispatch({
        type: QuotesActions.QUOTES_FETCH_ERROR,
        payload: { errorCode: err.status },
      }));
  }

  saveQuote(quote) {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTE_SAVE_PENDING,
      payload: quote,
    });

    this.quotesService.save(quote)
      .then(result => {
        this.ngRedux.dispatch({
          type: QuotesActions.QUOTE_SAVE_SUCCESS,
          payload: result,
        });
        this.fetchQuotes();
      })
      .catch(err => this.ngRedux.dispatch({
        type: QuotesActions.QUOTE_SAVE_ERROR,
        payload: { errorCode: err.status },
      }));
  }

  removeQuote(quote) {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTE_REMOVE_PENDING,
      payload: quote,
    });

    this.quotesService.remove(quote._id)
      .then(result => {
        this.ngRedux.dispatch({
          type: QuotesActions.QUOTE_REMOVE_SUCCESS,
          payload: result,
        });
        this.fetchQuotes();
      })
      .catch(err => this.ngRedux.dispatch({
        type: QuotesActions.QUOTE_REMOVE_ERROR,
        payload: { errorCode: err.status },
      }));
  }

  showRemoveQuoteConfirm(quote) {
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

  showUpdateQuoteModal(quote) {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTE_UPDATE_FETCH_PENDING,
    });

    this.quotesService.read(quote._id)
      .then(result => {
        this.ngRedux.dispatch({
          type: QuotesActions.QUOTE_UPDATE_FETCH_SUCCESS,
          payload: result,
        });
        this.ngRedux.dispatch({
          type: QuotesActions.QUOTE_UPDATE_MODAL,
        });
      })
      .catch(err => this.ngRedux.dispatch({
        type: QuotesActions.QUOTE_UPDATE_FETCH_ERROR,
        payload: { errorCode: err.status },
      }));
  }

  updateQuoteModalCancel() {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTE_UPDATE_MODAL_CANCEL,
    });
  }

  updateQuote(quote) {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTE_UPDATE_PENDING,
      payload: quote,
    });

    this.quotesService.update(quote._id, quote)
      .then(result => {
        this.ngRedux.dispatch({
          type: QuotesActions.QUOTE_UPDATE_SUCCESS,
          payload: result,
        });
        this.fetchQuotes();
      })
      .catch(err => this.ngRedux.dispatch({
        type: QuotesActions.QUOTE_UPDATE_ERROR,
        payload: { errorCode: err.status },
      }));
  }
}
