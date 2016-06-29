import { UsersActions } from '../actions/users';
import { Map, fromJS } from 'immutable';

export const INITIAL_STATE = fromJS({
  users: {
    isPending: false,
    isError: false,
    isSuccess: false,
    errorCode: 0,
    items: [],
  },
});

export type IUsers = Map<string, any>;

export function usersReducer(state: IUsers = INITIAL_STATE, action: any = { type: '' }) {
  switch (action.type) {
    case UsersActions.USERS_FETCH_PENDING:
    {
      return state
        .setIn(['users', 'isPending'], true)
        .setIn(['users', 'isError'], false)
        .setIn(['users', 'isSuccess'], false)
        .setIn(['users', 'errorCode'], 0)
      ;
    }

    case UsersActions.USERS_FETCH_SUCCESS:
    {
      return state
        .setIn(['users', 'isPending'], false)
        .setIn(['users', 'isSuccess'], true)
        .setIn(['users', 'items'], fromJS(action.payload))
      ;
    }

    case UsersActions.USERS_FETCH_ERROR:
    {
      return state
        .setIn(['users', 'isPending'], false)
        .setIn(['users', 'isError'], true)
        .setIn(['users', 'errorCode'], action.payload.errorCode)
      ;
    }

    default:
    {
      return state;
    }
  }
}
