import { combineReducers } from 'redux';
import { ISession, sessionReducer } from './session';
import { IUser, userReducer } from './user';
import { IDashboard, dashboardReducer } from './dashboard';
import { IUsers, usersReducer } from './users';
import { ICircles, circlesReducer } from './circles';

export interface IAppState {
  session?: ISession;
  user?: IUser;
  dashboard?: IDashboard;
  users?: IUsers;
  circles?: ICircles;
}

export default combineReducers<IAppState>({
  session: sessionReducer,
  user: userReducer,
  dashboard: dashboardReducer,
  users: usersReducer,
  circles: circlesReducer,
});
