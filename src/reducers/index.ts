import { combineReducers } from 'redux';
import { ISession, sessionReducer } from './session';
import { IArticle, articleReducer } from './article';
import { IArticles, articlesReducer } from './articles';
import { IQuotes, quotesReducer } from './quotes';

export interface IAppState {
  session?: ISession;
  article?: IArticle;
  articles?: IArticles;
  quotes?: IQuotes;
}

export default combineReducers<IAppState>({
  session: sessionReducer,
  article: articleReducer,
  articles: articlesReducer,
  quotes: quotesReducer
});
