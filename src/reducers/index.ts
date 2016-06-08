import { combineReducers } from 'redux';
import { ISession, sessionReducer } from './session';
import { IArticle, articleReducer } from './article';
import { IArticles, articlesReducer } from './articles';
import { IFeatured, featuredReducer } from './featured';

export interface IAppState {
  session?: ISession;
  article?: IArticle;
  articles?: IArticles;
  featured?: IFeatured;
}

export default combineReducers<IAppState>({
  session: sessionReducer,
  article: articleReducer,
  articles: articlesReducer,
  featured: featuredReducer,
});
