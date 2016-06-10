import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';
import { QuotesService } from '../services/quotes';
import { QuotesActions } from './quotes';

@Injectable()
export class QuoteActions {
  static QUOTE_FETCH_PENDING = 'QUOTE_FETCH_PENDING';
  static QUOTE_FETCH_SUCCESS = 'QUOTE_FETCH_SUCCESS';
  static QUOTE_FETCH_ERROR = 'QUOTE_FETCH_ERROR';

  static QUOTE_SAVE_PENDING = 'QUOTE_SAVE_PENDING';
  static QUOTE_SAVE_SUCCESS = 'QUOTE_SAVE_SUCCESS';
  static QUOTE_SAVE_ERROR = 'QUOTE_SAVE_ERROR';

  static QUOTE_UPDATE_PENDING = 'QUOTE_UPDATE_PENDING';
  static QUOTE_UPDATE_SUCCESS = 'QUOTE_UPDATE_SUCCESS';
  static QUOTE_UPDATE_ERROR = 'QUOTE_UPDATE_ERROR';

  static QUOTE_REMOVE_PENDING = 'QUOTE_REMOVE_PENDING';
  static QUOTE_REMOVE_SUCCESS = 'QUOTE_REMOVE_SUCCESS';
  static QUOTE_REMOVE_ERROR = 'QUOTE_REMOVE_ERROR';

  constructor(private ngRedux: NgRedux<IAppState>,
              private quotesService: QuotesService) {
  }

  read(_id) {
    this.ngRedux.dispatch({
      type: QuoteActions.QUOTE_FETCH_PENDING,
    });

    this.quotesService.read(_id)
      .then(result => this.ngRedux.dispatch({
        type: QuoteActions.QUOTE_FETCH_SUCCESS,
        payload: result,
      }))
      .catch(() => this.ngRedux.dispatch({
        type: QuoteActions.QUOTE_FETCH_ERROR,
      }));
  }

  save(article) {
    this.ngRedux.dispatch({
      type: QuoteActions.QUOTE_SAVE_PENDING,
    });

    this.quotesService.save(article)
      .then(result => {
        this.ngRedux.dispatch({
          type: QuoteActions.QUOTE_SAVE_SUCCESS,
          payload: result,
        });
        this.ngRedux.dispatch({
          type: QuotesActions.QUOTES_SAVE,
          payload: result,
        });
      })
      .catch(() => this.ngRedux.dispatch({
        type: QuoteActions.QUOTE_SAVE_ERROR,
      }));
  }

  update(article, _id) {
    this.ngRedux.dispatch({
      type: QuoteActions.QUOTE_UPDATE_PENDING,
    });

    this.quotesService.update(article, _id)
      .then(result => {
        this.ngRedux.dispatch({
          type: QuoteActions.QUOTE_UPDATE_SUCCESS,
          payload: result,
        });
        this.ngRedux.dispatch({
          type: QuotesActions.QUOTES_UPDATE,
          payload: result,
        });
      })
      .catch(() => this.ngRedux.dispatch({
        type: QuoteActions.QUOTE_UPDATE_ERROR,
      }));
  }

  remove(_id) {
    this.ngRedux.dispatch({
      type: QuoteActions.QUOTE_REMOVE_PENDING
    });

    this.quotesService.remove(_id)
      .then(result => {
        this.ngRedux.dispatch({
          type: QuoteActions.QUOTE_REMOVE_SUCCESS,
          payload: result,
        });
        this.ngRedux.dispatch({
          type: QuotesActions.QUOTES_REMOVE,
          payload: result,
        });
      })
      .catch(() => this.ngRedux.dispatch({
        type: QuoteActions.QUOTE_REMOVE_ERROR,
      }));
  }
}
