import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';
import { ArticlesService } from '../services/articles';

@Injectable()
export class FeaturedActions {
  static FEATURED_FETCH_PENDING = 'FEATURED_FETCH_PENDING';
  static FEATURED_FETCH_SUCCESS = 'FEATURED_FETCH_SUCCESS';
  static FEATURED_FETCH_ERROR = 'FEATURED_FETCH_ERROR';

  static FEATURED_SAVE_PENDING = 'FEATURED_SAVE_PENDING';
  static FEATURED_SAVE_SUCCESS = 'FEATURED_SAVE_SUCCESS';
  static FEATURED_SAVE_ERROR = 'FEATURED_SAVE_ERROR';

  static FEATURED_UPDATE_PENDING = 'FEATURED_UPDATE_PENDING';
  static FEATURED_UPDATE_SUCCESS = 'FEATURED_UPDATE_SUCCESS';
  static FEATURED_UPDATE_ERROR = 'FEATURED_UPDATE_ERROR';

  static FEATURED_REMOVE_PENDING = 'FEATURED_REMOVE_PENDING';
  static FEATURED_REMOVE_SUCCESS = 'FEATURED_REMOVE_SUCCESS';
  static FEATURED_REMOVE_ERROR = 'FEATURED_REMOVE_ERROR';

  static FEATURED_SAVE = 'FEATURED_SAVE';
  static FEATURED_UPDATE = 'FEATURED_UPDATE';
  static FEATURED_REMOVE = 'FEATURED_REMOVE';

  constructor(private ngRedux: NgRedux<IAppState>,
              private articlesService: ArticlesService) {
  }

  fetchAll() {
    this.ngRedux.dispatch({
      type: FeaturedActions.FEATURED_FETCH_PENDING,
    });

    this.articlesService.fetchAll()
      .then(result => this.ngRedux.dispatch({
        type: FeaturedActions.FEATURED_FETCH_SUCCESS,
        payload: result
      }))
      .catch(() => this.ngRedux.dispatch({
        type: FeaturedActions.FEATURED_FETCH_ERROR,
      }));
  }
  
  remove(_id: string) {
    this.ngRedux.dispatch({
      type: FeaturedActions.FEATURED_REMOVE_PENDING
    });

    this.articlesService.remove(_id)
      .then(result => {
        this.ngRedux.dispatch({
          type: FeaturedActions.FEATURED_REMOVE_SUCCESS,
          payload: result,
        });
        this.ngRedux.dispatch({
          type: FeaturedActions.FEATURED_REMOVE,
          payload: result,
        });
      })
      .catch(() => this.ngRedux.dispatch({
        type: FeaturedActions.FEATURED_REMOVE_ERROR,
      }));
  }
}
