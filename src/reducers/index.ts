import { combineReducers } from 'redux';
import { ISession, sessionReducer } from './session';

export interface IAppState {
    session?: ISession;
}

export default combineReducers<IAppState>({
    session: sessionReducer,
});
