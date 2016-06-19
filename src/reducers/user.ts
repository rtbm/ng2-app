import { SessionActions } from '../actions/session';
import { UserActions } from '../actions/user';
import { Map, fromJS } from 'immutable';

export const INITIAL_STATE = fromJS({
  signup: {
    isPending: false,
    isError: false,
    isSuccess: false,
    status: 0,
    error: {},
  },
  signin: {
    isPending: false,
    isError: false,
    isSuccess: false,
    status: 0,
    error: {},
  },
  resetPassword: {
    isPending: false,
    isError: false,
    isSuccess: false,
    status: 0,
    error: {},
  },
});

export type IUser = Map<string, any>;

export function userReducer(state: IUser = INITIAL_STATE, action: any = { type: '' }) {
  switch (action.type) {
    case UserActions.USER_SIGNIN_PENDING: {
      return state
        .setIn(['signin', 'isPending'], true)
        .setIn(['signin', 'isError'], false)
        .setIn(['signin', 'isSuccess'], false);
    }

    case UserActions.USER_SIGNIN_SUCCESS: {
      return state
        .setIn(['signin', 'isPending'], false)
        .setIn(['signin', 'isError'], false)
        .setIn(['signin', 'isSuccess'], true);
    }

    case UserActions.USER_SIGNIN_ERROR: {
      return state
        .setIn(['signin', 'isPending'], false)
        .setIn(['signin', 'isError'], true)
        .setIn(['signin', 'isSuccess'], false)
        .setIn(['signin', 'error'], fromJS(action.payload));
    }

    case UserActions.USER_SIGNUP_PENDING: {
      return state
        .setIn(['signup', 'isPending'], true)
        .setIn(['signup', 'isError'], false)
        .setIn(['signup', 'isSuccess'], false);
    }

    case UserActions.USER_SIGNUP_SUCCESS: {
      return state
        .setIn(['signup', 'isPending'], false)
        .setIn(['signup', 'isError'], false)
        .setIn(['signup', 'isSuccess'], true);
    }

    case UserActions.USER_SIGNUP_ERROR: {
      return state
        .setIn(['signup', 'isPending'], false)
        .setIn(['signup', 'isError'], true)
        .setIn(['signup', 'isSuccess'], false)
        .setIn(['signup', 'error'], fromJS(action.payload));
    }

    case UserActions.USER_RESET_PASSWORD_PENDING: {
      return state
        .setIn(['resetPassword', 'isPending'], true)
        .setIn(['resetPassword', 'isError'], false)
        .setIn(['resetPassword', 'isSuccess'], false);
    }

    case UserActions.USER_RESET_PASSWORD_SUCCESS: {
      return state
        .setIn(['resetPassword', 'isPending'], false)
        .setIn(['resetPassword', 'isError'], false)
        .setIn(['resetPassword', 'isSuccess'], true);
    }

    case UserActions.USER_RESET_PASSWORD_ERROR: {
      return state
        .setIn(['resetPassword', 'isPending'], false)
        .setIn(['resetPassword', 'isError'], true)
        .setIn(['resetPassword', 'error'], fromJS(action.payload));
    }

    default:
    {
      return state;
    }
  }
}
