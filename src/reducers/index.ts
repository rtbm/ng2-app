import { combineReducers } from 'redux';
import { ISession, sessionReducer } from './session';
import { IDashboard, dashboardReducer } from './dashboard';

export interface IAppState {
  session?: ISession;
  dashboard?: IDashboard;
}

export default combineReducers<IAppState>({
  session: sessionReducer,
  dashboard: dashboardReducer,
});
