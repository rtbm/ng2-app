import { CirclesActions } from './circles.actions';
import { ProfileActions } from './profile.actions';
import { QuotesActions } from './quotes.actions';
import { UserActions } from './user.actions';
import { UsersActions } from './users.actions';

export * from './circles.actions';
export * from './profile.actions';
export * from './quotes.actions';
export * from './user.actions';
export * from './users.actions';

export const ACTIONS_PROVIDERS = [
  CirclesActions,
  ProfileActions,
  QuotesActions,
  UserActions,
  UsersActions,
];
