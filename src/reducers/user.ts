import { UserActions } from '../actions/user';
import { Map, fromJS } from 'immutable';

export const INITIAL_STATE = fromJS({
  signupForm: {
    isPending: false,
    isError: false,
    isSuccess: false,
    errorCode: 0,
  },
  signinForm: {
    isPending: false,
    isError: false,
    isSuccess: false,
    errorCode: 0,
  },
  resetPasswordForm: {
    isPending: false,
    isError: false,
    isSuccess: false,
    errorCode: 0,
  },
});

export type IUser = Map<string, any>;

export function userReducer(state: IUser = INITIAL_STATE, action: any = { type: '' }) {
  switch (action.type) {
    case UserActions.USER_SIGNIN_PENDING: {
      return state
        .setIn(['signinForm', 'isPending'], true)
        .setIn(['signinForm', 'isError'], false)
        .setIn(['signinForm', 'isSuccess'], false)
        .setIn(['signinForm', 'errorCode'], 0)
      ;
    }

    case UserActions.USER_SIGNIN_SUCCESS: {
      return state
        .setIn(['signinForm', 'isPending'], false)
        .setIn(['signinForm', 'isSuccess'], true)
      ;
    }

    case UserActions.USER_SIGNIN_ERROR: {
      return state
        .setIn(['signinForm', 'isPending'], false)
        .setIn(['signinForm', 'isError'], true)
        .setIn(['signinForm', 'errorCode'], action.payload.errorCode)
      ;
    }

    case UserActions.USER_SIGNUP_PENDING: {
      return state
        .setIn(['signupForm', 'isPending'], true)
        .setIn(['signupForm', 'isError'], false)
        .setIn(['signupForm', 'isSuccess'], false)
        .setIn(['signupForm', 'errorCode'], 0)
      ;
    }

    case UserActions.USER_SIGNUP_SUCCESS: {
      return state
        .setIn(['signupForm', 'isPending'], false)
        .setIn(['signupForm', 'isSuccess'], true)
      ;
    }

    case UserActions.USER_SIGNUP_ERROR: {
      return state
        .setIn(['signupForm', 'isPending'], false)
        .setIn(['signupForm', 'isError'], true)
        .setIn(['signupForm', 'errorCode'], action.payload.errorCode)
      ;
    }

    case UserActions.USER_RESET_PASSWORD_PENDING: {
      return state
        .setIn(['resetPasswordForm', 'isPending'], true)
        .setIn(['resetPasswordForm', 'isError'], false)
        .setIn(['resetPasswordForm', 'isSuccess'], false)
        .setIn(['resetPasswordForm', 'errorCode'], 0)
      ;
    }

    case UserActions.USER_RESET_PASSWORD_SUCCESS: {
      return state
        .setIn(['resetPasswordForm', 'isPending'], false)
        .setIn(['resetPasswordForm', 'isSuccess'], true)
      ;
    }

    case UserActions.USER_RESET_PASSWORD_ERROR: {
      return state
        .setIn(['resetPasswordForm', 'isPending'], false)
        .setIn(['resetPasswordForm', 'isError'], true)
        .setIn(['resetPasswordForm', 'errorCode'], action.payload.errorCode)
      ;
    }

    default:
    {
      return state;
    }
  }
}
