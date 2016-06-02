import { combineReducers } from 'redux';
import { ISession, sessionReducer } from './session';
import { IArticle, articleReducer } from './article';
import { IArticles, articlesReducer } from './articles';

export interface IAppState {
  session?: ISession;
  article?: IArticle;
  articles?: IArticles;
}

export default combineReducers<IAppState>({
  session: sessionReducer,
  article: articleReducer,
  articles: articlesReducer,
});
