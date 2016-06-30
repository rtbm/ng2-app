import { UsersActions } from '../actions/users';
import { Map, fromJS } from 'immutable';

export const INITIAL_STATE = fromJS({
  users: {
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
    items: [],
  },
  invite: {
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
  },
});

export type IUsers = Map<string, any>;

export function usersReducer(state: IUsers = INITIAL_STATE, action: any = { type: '' }) {
  switch (action.type) {
    case UsersActions.USERS_FETCH_PENDING:
    {
      return state
        .setIn(['users', 'isPending'], true)
        .setIn(['users', 'isSuccess'], false)
        .setIn(['users', 'isError'], false)
        .setIn(['users', 'errorCode'], 0);
    }

    case UsersActions.USERS_FETCH_SUCCESS:
    {
      return state
        .setIn(['users', 'isPending'], false)
        .setIn(['users', 'isSuccess'], true)
        .setIn(['users', 'items'], fromJS(action.payload));
    }

    case UsersActions.USERS_FETCH_ERROR:
    {
      return state
        .setIn(['users', 'isPending'], false)
        .setIn(['users', 'isError'], true)
        .setIn(['users', 'errorCode'], action.payload.errorCode);
    }

    case UsersActions.USERS_INVITE_PENDING:
    {
      return state
        .setIn(['invite', 'isPending'], true)
        .setIn(['invite', 'isSuccess'], false)
        .setIn(['invite', 'isError'], false)
        .setIn(['invite', 'errorCode'], 0);
    }

    case UsersActions.USERS_INVITE_SUCCESS:
    {
      return state
        .setIn(['invite', 'isPending'], false)
        .setIn(['invite', 'isSuccess'], true)
        .setIn(['invite', 'items'], fromJS(action.payload));
    }

    case UsersActions.USERS_INVITE_ERROR:
    {
      return state
        .setIn(['invite', 'isPending'], false)
        .setIn(['invite', 'isError'], true)
        .setIn(['invite', 'errorCode'], action.payload.errorCode);
    }

    default:
    {
      return state;
    }
  }
}
