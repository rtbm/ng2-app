import { IPayloadAction, UsersActions } from '../../actions';
import { fromJS } from 'immutable';
import { IUsersRecord } from './users.types';
import { INITIAL_STATE } from './users.initial-state';

export function usersReducer(state: IUsersRecord = INITIAL_STATE, action: IPayloadAction): IUsersRecord {
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
        .setIn(['follow', 'errorCode'], 0)
        .setIn(['follow', 'item'], action.payload.user);
    }

    case UsersActions.USERS_FOLLOW_SUCCESS:
    {
      return state
        .setIn(['follow', 'isPending'], false)
        .setIn(['follow', 'isSuccess'], true)
        .setIn(['follow', 'items'], fromJS(action.payload))
        .setIn(['follow', 'isModalVisible'], false)
        .updateIn(['users', 'items'], list => list.update(
          list.findIndex(item => item.get('_id') === action.payload._id),
          item => item.set('followed', true)
        ));
    }

    case UsersActions.USERS_FOLLOW_ERROR:
    {
      return state
        .setIn(['unfollow', 'isPending'], false)
        .setIn(['unfollow', 'isError'], true)
        .setIn(['unfollow', 'errorCode'], action.payload.errorCode);
    }

    case UsersActions.USERS_UNFOLLOW:
    {
      return state
        .setIn(['unfollow', 'isPending'], true)
        .setIn(['unfollow', 'isSuccess'], false)
        .setIn(['unfollow', 'isError'], false)
        .setIn(['unfollow', 'errorCode'], 0)
        .setIn(['unfollow', 'item'], action.payload.user);
    }

    case UsersActions.USERS_UNFOLLOW_SUCCESS:
    {
      return state
        .setIn(['unfollow', 'isPending'], false)
        .setIn(['unfollow', 'isSuccess'], true)
        .setIn(['unfollow', 'items'], fromJS(action.payload))
        .setIn(['unfollow', 'isModalVisible'], false)
        .updateIn(['users', 'items'], list => list.update(
          list.findIndex(item => item.get('_id') === action.payload._id),
          item => item.set('followed', false)
        ));
    }

    case UsersActions.USERS_UNFOLLOW_ERROR:
    {
      return state
        .setIn(['unfollow', 'isPending'], false)
        .setIn(['unfollow', 'isError'], true)
        .setIn(['unfollow', 'errorCode'], action.payload.errorCode);
    }

    default:
    {
      return state;
    }
  }
}
