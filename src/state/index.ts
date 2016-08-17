import { combineReducers } from 'redux';
import * as profile from './profile';
import * as quotes from './quotes';
import * as user from './user';
import * as users from './users';

export { middlewares } from './middlewares';
export { enhancers } from './enhancers';

export interface IAppState {
  profile?: profile.IProfile;
  quotes?: quotes.IQuotes;
  user?: user.IUser;
  users?: users.IUsers;
}

export default combineReducers<IAppState>({
  profile: profile.profileReducer,
  quotes: quotes.quotesReducer,
  user: user.userReducer,
  users: users.usersReducer,
});
