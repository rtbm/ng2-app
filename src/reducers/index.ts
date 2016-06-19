import { combineReducers } from 'redux';
import { ISession, sessionReducer } from './session';
import { IUser, userReducer } from './user';
import { IDashboard, dashboardReducer } from './dashboard';

export interface IAppState {
  session?: ISession;
  user?: IUser;
  dashboard?: IDashboard;
}

export default combineReducers<IAppState>({
  session: sessionReducer,
  user: userReducer,
  dashboard: dashboardReducer,
});
