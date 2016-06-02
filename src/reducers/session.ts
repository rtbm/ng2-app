import {SessionActions} from '../actions/session';
import {Map, fromJS} from 'immutable';

export const SESSION_INITIAL_STATE = fromJS({
  isPending: false,
  isError: false,
  isAuthorized: false,
  id_token: '',
});

export type ISession = Map<string, any>;

export function sessionReducer(state: ISession = SESSION_INITIAL_STATE, action: any = {type: ''}) {
  switch (action.type) {
    case SessionActions.SIGNIN_USER_PENDING: {
      return state.merge(SESSION_INITIAL_STATE, {isPending: true});
    }

    case SessionActions.SIGNIN_USER_SUCCESS: {
      return state.merge({isPending: false, isAuthorized: true, id_token: action.payload.id_token});
    }

    case SessionActions.SIGNIN_USER_ERROR: {
      return state.merge({isPending: false, isError: true});
    }

    case SessionActions.SIGNUP_USER_PENDING: {
      return state.merge(SESSION_INITIAL_STATE, {isPending: true});
    }

    case SessionActions.SIGNUP_USER_SUCCESS: {
      return state.merge({isPending: false, isAuthorized: true, id_token: action.payload.id_token});
    }

    case SessionActions.SIGNUP_USER_ERROR: {
      return state.merge({isPending: false, isError: true});
    }

    case SessionActions.LOGOUT_USER: {
      return state.merge(SESSION_INITIAL_STATE);
    }

    default: {
      return state;
    }
  }
}
