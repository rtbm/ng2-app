import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';
import { ArticlesService } from '../services/articles';

@Injectable()
export class ArticlesActions {
  static ARTICLES_FETCH_PENDING = 'ARTICLES_FETCH_PENDING';
  static ARTICLES_FETCH_SUCCESS = 'ARTICLES_FETCH_SUCCESS';
  static ARTICLES_FETCH_ERROR = 'ARTICLES_FETCH_ERROR';

  static ARTICLES_SAVE = 'ARTICLES_SAVE';
  static ARTICLES_UPDATE = 'ARTICLES_UPDATE';
  static ARTICLES_REMOVE = 'ARTICLES_REMOVE';

  constructor(private ngRedux: NgRedux<IAppState>,
              private articlesService: ArticlesService) {
  }

  fetchAll() {
    this.ngRedux.dispatch({
      type: ArticlesActions.ARTICLES_FETCH_PENDING,
    });

    this.articlesService.fetchAll()
      .then(result => this.ngRedux.dispatch({
        type: ArticlesActions.ARTICLES_FETCH_SUCCESS,
        payload: result
      }))
      .catch(() => this.ngRedux.dispatch({
        type: ArticlesActions.ARTICLES_FETCH_ERROR,
      }));
  }

  fetchAllFeatured() {
    this.ngRedux.dispatch({
      type: ArticlesActions.ARTICLES_FETCH_PENDING,
    });

    this.articlesService.fetchAll()
      .then(result => this.ngRedux.dispatch({
        type: ArticlesActions.ARTICLES_FETCH_SUCCESS,
        payload: result
      }))
      .catch(() => this.ngRedux.dispatch({
        type: ArticlesActions.ARTICLES_FETCH_ERROR,
      }));
  }
}
