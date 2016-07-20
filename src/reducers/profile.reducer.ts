import { ProfileActions } from '../actions/profile.actions';
import { Map, fromJS } from 'immutable';

export const INITIAL_STATE = fromJS({
  user: {
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
    item: {},
  },
  updateUser: {
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
  },
});

export type IProfile = Map<string, any>;

export function profileReducer(state: IProfile = INITIAL_STATE, action: any = { type: '' }) {
  switch (action.type) {
    case ProfileActions.USER_FETCH:
    {
      return state
        .setIn(['user', 'isPending'], true)
        .setIn(['user', 'isSuccess'], false)
        .setIn(['user', 'isError'], false)
        .setIn(['user', 'errorCode'], 0);
    }

    case ProfileActions.USER_FETCH_SUCCESS:
    {
      return state
        .setIn(['user', 'isPending'], false)
        .setIn(['user', 'isSuccess'], true)
        .setIn(['user', 'item'], fromJS(action.payload));
    }

    case ProfileActions.USER_FETCH_ERROR:
    {
      return state
        .setIn(['user', 'isPending'], false)
        .setIn(['user', 'isError'], true)
        .setIn(['user', 'errorCode'], action.payload.errorCode);
    }

    case ProfileActions.USER_UPDATE:
    {
      return state
        .setIn(['updateUser', 'isPending'], true)
        .setIn(['updateUser', 'isSuccess'], false)
        .setIn(['updateUser', 'isError'], false)
        .setIn(['updateUser', 'errorCode'], 0);
    }

    case ProfileActions.USER_UPDATE_SUCCESS:
    {
      return state
        .setIn(['updateUser', 'isPending'], false)
        .setIn(['updateUser', 'isSuccess'], true)
        .setIn(['user', 'item'], fromJS(action.payload));
    }

    case ProfileActions.USER_UPDATE_ERROR:
    {
      return state
        .setIn(['updateUser', 'isPending'], false)
        .setIn(['updateUser', 'isError'], true)
        .setIn(['updateUser', 'errorCode'], action.payload.errorCode);
    }

    default:
    {
      return state;
    }
  }
}
