import { combineReducers } from 'redux';
import { ISession, sessionReducer } from './session';
import { IUser, userReducer } from './user';
import { IQuotes, quotesReducer } from './quotes';
import { IUsers, usersReducer } from './users';
import { ICircles, circlesReducer } from './circles';
import { IProfile, profileReducer } from './profile';

export interface IAppState {
  session?: ISession;
  user?: IUser;
  quotes?: IQuotes;
  users?: IUsers;
  circles?: ICircles;
  profile?: IProfile;
}

export default combineReducers<IAppState>({
  session: sessionReducer,
  user: userReducer,
  quotes: quotesReducer,
  users: usersReducer,
  circles: circlesReducer,
  profile: profileReducer,
});
