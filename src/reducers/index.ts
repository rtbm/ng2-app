import { combineReducers } from 'redux';
import { ISession, sessionReducer } from './session';
import { IArticle, articleReducer } from './articles';

export interface IAppState {
    session?: ISession;
    article?: IArticle
}

export default combineReducers<IAppState>({
    session: sessionReducer,
    article: articleReducer,
});
