import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';
import { QuotesService } from '../services/quotes';

@Injectable()
export class DashboardActions {
  static DASHBOARD_QUOTES_FETCH_PENDING = 'DASHBOARD_QUOTES_FETCH_PENDING';
  static DASHBOARD_QUOTES_FETCH_SUCCESS = 'DASHBOARD_QUOTES_FETCH_SUCCESS';
  static DASHBOARD_QUOTES_FETCH_ERROR = 'DASHBOARD_QUOTES_FETCH_ERROR';

  static DASHBOARD_QUOTE_SAVE_PENDING = 'DASHBOARD_QUOTE_SAVE_PENDING';
  static DASHBOARD_QUOTE_SAVE_SUCCESS = 'DASHBOARD_QUOTE_SAVE_SUCCESS';
  static DASHBOARD_QUOTE_SAVE_ERROR = 'DASHBOARD_QUOTE_SAVE_ERROR';

  static DASHBOARD_QUOTE_REMOVE_PENDING = 'DASHBOARD_QUOTE_REMOVE_PENDING';
  static DASHBOARD_QUOTE_REMOVE_SUCCESS = 'DASHBOARD_QUOTE_REMOVE_SUCCESS';
  static DASHBOARD_QUOTE_REMOVE_ERROR = 'DASHBOARD_QUOTE_REMOVE_ERROR';

  static DASHBOARD_QUOTE_REMOVE_CONFIRM = 'DASHBOARD_QUOTE_REMOVE_CONFIRM';
  static DASHBOARD_QUOTE_REMOVE_CONFIRM_CANCEL = 'DASHBOARD_QUOTE_REMOVE_CONFIRM_CANCEL';

  constructor(private ngRedux: NgRedux<IAppState>,
              private quotesService: QuotesService) {
  }

  fetchData() {
    this.fetchQuotes();
  }

  fetchQuotes() {
    this.ngRedux.dispatch({
      type: DashboardActions.DASHBOARD_QUOTES_FETCH_PENDING,
    });

    this.quotesService.fetchAll()
      .then(result => this.ngRedux.dispatch({
        type: DashboardActions.DASHBOARD_QUOTES_FETCH_SUCCESS,
        payload: result
      }))
      .catch(() => this.ngRedux.dispatch({
        type: DashboardActions.DASHBOARD_QUOTES_FETCH_ERROR,
      }));
  }

  saveQuote(quote) {
    this.ngRedux.dispatch({
      type: DashboardActions.DASHBOARD_QUOTE_SAVE_PENDING,
    });

    this.quotesService.save(quote)
      .then(result => {
        this.ngRedux.dispatch({
          type: DashboardActions.DASHBOARD_QUOTE_SAVE_SUCCESS,
        });
        this.fetchQuotes();
      })
      .catch(() => this.ngRedux.dispatch({
        type: DashboardActions.DASHBOARD_QUOTE_SAVE_ERROR,
      }));
  }

  removeQuote(quote) {
    this.ngRedux.dispatch({
      type: DashboardActions.DASHBOARD_QUOTE_REMOVE_PENDING,
    });

    this.quotesService.remove(quote._id)
      .then(result => {
        this.ngRedux.dispatch({
          type: DashboardActions.DASHBOARD_QUOTE_REMOVE_SUCCESS,
          payload: result,
        });
        this.fetchQuotes();
      })
      .catch(err => this.ngRedux.dispatch({
        type: DashboardActions.DASHBOARD_QUOTE_REMOVE_ERROR,
        payload: err,
      }));
  }

  showRemoveQuoteConfirm(quote) {
    this.ngRedux.dispatch({
      type: DashboardActions.DASHBOARD_QUOTE_REMOVE_CONFIRM,
      payload: quote,
    });
  }

  removeQuoteConfirmCancel() {
    this.ngRedux.dispatch({
      type: DashboardActions.DASHBOARD_QUOTE_REMOVE_CONFIRM_CANCEL,
    });
  }
}
