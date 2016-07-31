import { UsersActions } from '../actions/users.actions';
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
  follow: {
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
  },
});

export type IUsers = Map<string, any>;

export function usersReducer(state: IUsers = INITIAL_STATE, action: any = { type: '' }) {
  switch (action.type) {
    case UsersActions.USERS_FETCH:
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

    case UsersActions.USERS_FOLLOW:
    {
      return state
        .setIn(['follow', 'isPending'], true)
        .setIn(['follow', 'isSuccess'], false)
        .setIn(['follow', 'isError'], false)
        .setIn(['follow', 'errorCode'], 0);
    }

    case UsersActions.USERS_FOLLOW_SUCCESS:
    {
      return state
        .setIn(['follow', 'isPending'], false)
        .setIn(['follow', 'isSuccess'], true)
        .setIn(['follow', 'items'], fromJS(action.payload))
        .setIn(['follow', 'isModalVisible'], false);
    }

    case UsersActions.USERS_FOLLOW_ERROR:
    {
      return state
        .setIn(['follow', 'isPending'], false)
        .setIn(['follow', 'isError'], true)
        .setIn(['follow', 'errorCode'], action.payload.errorCode);
    }

    default:
    {
      return state;
    }
  }
}
