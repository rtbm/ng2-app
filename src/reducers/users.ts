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
  follow: {
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
    user: {},
    isModalVisible: false,
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

    case UsersActions.USERS_FOLLOW_PENDING:
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

    case UsersActions.USERS_FOLLOW_MODAL:
    {
      return state.setIn(['follow', 'isModalVisible'], true)
        .setIn(['follow', 'user'], fromJS(action.payload));
    }

    case UsersActions.USERS_FOLLOW_MODAL_CANCEL:
    {
      return state.setIn(['follow', 'isModalVisible'], false)
        .setIn(['follow', 'user'], fromJS({}));
    }

    default:
    {
      return state;
    }
  }
}
