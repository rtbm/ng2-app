import { UserActions } from '../actions/user.actions';
import { Map, fromJS } from 'immutable';

export const INITIAL_STATE = fromJS({
  id_token: '',
  signup: {
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
  },
  signin: {
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
  },
  resetPassword: {
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
  },
});

export type IUser = Map<string, any>;

export function userReducer(state: IUser = INITIAL_STATE, action: any = { type: '' }) {
  switch (action.type) {
    case UserActions.USER_SIGNIN: {
      return state
        .setIn(['signin', 'isPending'], true)
        .setIn(['signin', 'isSuccess'], false)
        .setIn(['signin', 'isError'], false)
        .setIn(['signin', 'errorCode'], 0);
    }

    case UserActions.USER_SIGNIN_SUCCESS: {
      return state
        .setIn(['signin', 'isPending'], false)
        .setIn(['signin', 'isSuccess'], true)
        .set('id_token', action.payload.id_token);
    }

    case UserActions.USER_SIGNIN_ERROR: {
      return state
        .setIn(['signin', 'isPending'], false)
        .setIn(['signin', 'isError'], true)
        .setIn(['signin', 'errorCode'], action.payload.errorCode);
    }

    case UserActions.USER_SIGNUP: {
      return state
        .setIn(['signup', 'isPending'], true)
        .setIn(['signup', 'isSuccess'], false)
        .setIn(['signup', 'isError'], false)
        .setIn(['signup', 'errorCode'], 0);
    }

    case UserActions.USER_SIGNUP_SUCCESS: {
      return state
        .setIn(['signup', 'isPending'], false)
        .setIn(['signup', 'isSuccess'], true)
        .set('id_token', action.payload.id_token);
    }

    case UserActions.USER_SIGNUP_ERROR: {
      return state
        .setIn(['signup', 'isPending'], false)
        .setIn(['signup', 'isError'], true)
        .setIn(['signup', 'errorCode'], action.payload.errorCode);
    }

    case UserActions.USER_RESET_PASSWORD: {
      return state
        .setIn(['resetPassword', 'isPending'], true)
        .setIn(['resetPassword', 'isSuccess'], false)
        .setIn(['resetPassword', 'isError'], false)
        .setIn(['resetPassword', 'errorCode'], 0);
    }

    case UserActions.USER_RESET_PASSWORD_SUCCESS: {
      return state
        .setIn(['resetPassword', 'isPending'], false)
        .setIn(['resetPassword', 'isSuccess'], true);
    }

    case UserActions.USER_RESET_PASSWORD_ERROR: {
      return state
        .setIn(['resetPassword', 'isPending'], false)
        .setIn(['resetPassword', 'isError'], true)
        .setIn(['resetPassword', 'errorCode'], action.payload.errorCode);
    }

    case UserActions.USER_SIGNOUT: {
      return state
        .set('id_token', '');
    }

    default:
    {
      return state;
    }
  }
}
