import {Injectable} from "@angular/core";
import {NgRedux} from "ng2-redux";
import {IAppState} from "../reducers";
import {ArticlesService} from "../services/articles";

@Injectable()
export class ArticlesActions {
  static ARTICLES_FETCH_PENDING = 'ARTICLES_FETCH_PENDING';
  static ARTICLES_FETCH_SUCCESS = 'ARTICLES_FETCH_SUCCESS';
  static ARTICLES_FETCH_ERROR = 'ARTICLES_FETCH_ERROR';

  static ARTICLE_FETCH_PENDING = 'ARTICLE_FETCH_PENDING';
  static ARTICLE_FETCH_SUCCESS = 'ARTICLE_FETCH_SUCCESS';
  static ARTICLE_FETCH_ERROR = 'ARTICLE_FETCH_ERROR';

  static ARTICLE_SAVE_PENDING = 'ARTICLE_SAVE_PENDING';
  static ARTICLE_SAVE_SUCCESS = 'ARTICLE_SAVE_SUCCESS';
  static ARTICLE_SAVE_ERROR = 'ARTICLE_SAVE_ERROR';

  static ARTICLE_UPDATE_PENDING = 'ARTICLE_UPDATE_PENDING';
  static ARTICLE_UPDATE_SUCCESS = 'ARTICLE_UPDATE_SUCCESS';
  static ARTICLE_UPDATE_ERROR = 'ARTICLE_UPDATE_ERROR';

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

  read(_id) {
    this.ngRedux.dispatch({
      type: ArticlesActions.ARTICLE_FETCH_PENDING,
    });

    this.articlesService.read(_id)
      .then(result => this.ngRedux.dispatch({
        type: ArticlesActions.ARTICLE_FETCH_SUCCESS,
        payload: result,
      }))
      .catch(() => this.ngRedux.dispatch({
        type: ArticlesActions.ARTICLE_FETCH_ERROR,
      }));
  }

  save(article) {
    this.ngRedux.dispatch({
      type: ArticlesActions.ARTICLE_SAVE_PENDING,
    });

    this.articlesService.save(article)
      .then(result => this.ngRedux.dispatch({
        type: ArticlesActions.ARTICLE_SAVE_SUCCESS,
        payload: result,
      }))
      .catch(() => this.ngRedux.dispatch({
        type: ArticlesActions.ARTICLE_SAVE_ERROR,
      }));
  }

  update(article, id) {
    this.ngRedux.dispatch({
      type: ArticlesActions.ARTICLE_UPDATE_PENDING,
    });

    this.articlesService.update(article, id)
      .then(result => this.ngRedux.dispatch({
        type: ArticlesActions.ARTICLE_UPDATE_SUCCESS,
        payload: result,
      }))
      .catch(() => this.ngRedux.dispatch({
        type: ArticlesActions.ARTICLE_UPDATE_ERROR,
      }));
  }
}
