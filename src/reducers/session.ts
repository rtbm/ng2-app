import { SessionActions } from '../actions/session';
import { Map, fromJS } from 'immutable';

export const INITIAL_STATE = fromJS({
  user: {},
  isAuthorized: false,
  id_token: '',
});

export type ISession = Map<string, any>;

export function sessionReducer(state: ISession = INITIAL_STATE, action: any = { type: '' }) {
  switch (action.type) {
    case SessionActions.SESSION_SET_TOKEN:
    {
      return state.merge({
        isAuthorized: true,
        id_token: action.payload.id_token,
        user: action.payload.user,
      });
    }

    case SessionActions.SESSION_UNSET_TOKEN:
    {
      return state.merge({
        isAuthorized: false,
        id_token: '',
        user: {},
      });
    }

    default:
    {
      return state;
    }
  }
}
