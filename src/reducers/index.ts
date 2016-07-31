import { combineReducers } from 'redux';
import { IUser, userReducer } from './user.reducer';
import { IQuotes, quotesReducer } from './quotes.reducer';
import { IUsers, usersReducer } from './users.reducer';
import { IProfile, profileReducer } from './profile.reducer';

export interface IAppState {
  user?: IUser;
  quotes?: IQuotes;
  users?: IUsers;
  profile?: IProfile;
}

export default combineReducers<IAppState>({
  user: userReducer,
  quotes: quotesReducer,
  users: usersReducer,
  profile: profileReducer,
});
