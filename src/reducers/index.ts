import {combineReducers} from 'redux';
import {ISession, sessionReducer} from './session';
import {IArticles, articlesReducer} from './articles';

export interface IAppState {
  session?: ISession;
  articles?: IArticles
}

export default combineReducers<IAppState>({
  session: sessionReducer,
  articles: articlesReducer,
});
