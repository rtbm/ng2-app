import { ProfileActions } from './profile.actions';
import { QuotesActions } from './quotes.actions';
import { UserActions } from './user.actions';
import { UsersActions } from './users.actions';
import { Action } from 'redux';

export * from './profile.actions';
export * from './quotes.actions';
export * from './user.actions';
export * from './users.actions';

export const ACTIONS_PROVIDERS = [
  ProfileActions,
  QuotesActions,
  UserActions,
  UsersActions,
];

export interface IPayloadAction extends Action {
  payload?: any;
}
