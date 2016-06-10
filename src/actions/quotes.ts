import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';
import { QuotesService } from '../services/quotes';

@Injectable()
export class QuotesActions {
  static QUOTES_FETCH_PENDING = 'QUOTES_FETCH_PENDING';
  static QUOTES_FETCH_SUCCESS = 'QUOTES_FETCH_SUCCESS';
  static QUOTES_FETCH_ERROR = 'QUOTES_FETCH_ERROR';

  static QUOTES_SAVE = 'QUOTES_SAVE';
  static QUOTES_UPDATE = 'QUOTES_UPDATE';
  static QUOTES_REMOVE = 'QUOTES_REMOVE';

  constructor(private ngRedux: NgRedux<IAppState>,
              private quotesService: QuotesService) {
  }

  fetchAll() {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTES_FETCH_PENDING,
    });

    this.quotesService.fetchAll()
      .then(result => this.ngRedux.dispatch({
        type: QuotesActions.QUOTES_FETCH_SUCCESS,
        payload: result
      }))
      .catch(() => this.ngRedux.dispatch({
        type: QuotesActions.QUOTES_FETCH_ERROR,
      }));
  }

  fetchAllFeatured() {
    this.ngRedux.dispatch({
      type: QuotesActions.QUOTES_FETCH_PENDING,
    });

    this.quotesService.fetchAll()
      .then(result => this.ngRedux.dispatch({
        type: QuotesActions.QUOTES_FETCH_SUCCESS,
        payload: result
      }))
      .catch(() => this.ngRedux.dispatch({
        type: QuotesActions.QUOTES_FETCH_ERROR,
      }));
  }
}
