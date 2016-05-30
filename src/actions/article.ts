import {Injectable} from "@angular/core";
import {NgRedux} from "ng2-redux";
import {IAppState} from "../reducers";
import {ArticlesService} from "../services/articles";

import {ArticlesActions} from './articles';

@Injectable()
export class ArticleActions {
  static ARTICLE_FETCH_PENDING = 'ARTICLE_FETCH_PENDING';
  static ARTICLE_FETCH_SUCCESS = 'ARTICLE_FETCH_SUCCESS';
  static ARTICLE_FETCH_ERROR = 'ARTICLE_FETCH_ERROR';

  static ARTICLE_SAVE_PENDING = 'ARTICLE_SAVE_PENDING';
  static ARTICLE_SAVE_SUCCESS = 'ARTICLE_SAVE_SUCCESS';
  static ARTICLE_SAVE_ERROR = 'ARTICLE_SAVE_ERROR';

  static ARTICLE_UPDATE_PENDING = 'ARTICLE_UPDATE_PENDING';
  static ARTICLE_UPDATE_SUCCESS = 'ARTICLE_UPDATE_SUCCESS';
  static ARTICLE_UPDATE_ERROR = 'ARTICLE_UPDATE_ERROR';

  static ARTICLE_DELETE_PENDING = 'ARTICLE_DELETE_PENDING';
  static ARTICLE_DELETE_SUCCESS = 'ARTICLE_DELETE_SUCCESS';
  static ARTICLE_DELETE_ERROR = 'ARTICLE_DELETE_ERROR';

  constructor(private ngRedux: NgRedux<IAppState>,
              private articlesService: ArticlesService) {
  }

  read(_id) {
    this.ngRedux.dispatch({
      type: ArticleActions.ARTICLE_FETCH_PENDING,
    });

    this.articlesService.read(_id)
      .then(result => this.ngRedux.dispatch({
        type: ArticleActions.ARTICLE_FETCH_SUCCESS,
        payload: result,
      }))
      .catch(() => this.ngRedux.dispatch({
        type: ArticleActions.ARTICLE_FETCH_ERROR,
      }));
  }

  save(article) {
    this.ngRedux.dispatch({
      type: ArticleActions.ARTICLE_SAVE_PENDING,
    });

    this.articlesService.save(article)
      .then(result => {
        this.ngRedux.dispatch({
          type: ArticleActions.ARTICLE_SAVE_SUCCESS,
          payload: result,
        });
        this.ngRedux.dispatch({
          type: ArticlesActions.ARTICLES_SAVE,
          payload: result,
        });
      })
      .catch(() => this.ngRedux.dispatch({
        type: ArticleActions.ARTICLE_SAVE_ERROR,
      }));
  }

  update(article, _id) {
    this.ngRedux.dispatch({
      type: ArticleActions.ARTICLE_UPDATE_PENDING,
    });

    this.articlesService.update(article, _id)
      .then(result => {
        this.ngRedux.dispatch({
          type: ArticleActions.ARTICLE_UPDATE_SUCCESS,
          payload: result,
        });
        this.ngRedux.dispatch({
          type: ArticlesActions.ARTICLES_UPDATE,
          payload: result,
        });
      })
      .catch(() => this.ngRedux.dispatch({
        type: ArticleActions.ARTICLE_UPDATE_ERROR,
      }));
  }

  remove(_id) {
    this.ngRedux.dispatch({
      type: ArticleActions.ARTICLE_DELETE_PENDING
    });

    this.articlesService.remove(_id)
      .then(result => {
        this.ngRedux.dispatch({
          type: ArticleActions.ARTICLE_DELETE_SUCCESS,
          payload: result,
        });
        this.ngRedux.dispatch({
          type: ArticlesActions.ARTICLES_DELETE,
          payload: result,
        });
      })
      .catch(() => this.ngRedux.dispatch({
        type: ArticleActions.ARTICLE_DELETE_ERROR,
      }));
  }
}