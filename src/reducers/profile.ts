import { ProfileActions } from '../actions/profile';
import { Map, fromJS } from 'immutable';

export const INITIAL_STATE = fromJS({
  profile: {
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
    item: {},
  },
  updateProfile: {
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
  },
});

export type IProfile = Map<string, any>;

export function profileReducer(state: IProfile = INITIAL_STATE, action: any = { type: '' }) {
  switch (action.type) {
    case ProfileActions.PROFILE_FETCH_PENDING:
    {
      return state
        .setIn(['profile', 'isPending'], true)
        .setIn(['profile', 'isSuccess'], false)
        .setIn(['profile', 'isError'], false)
        .setIn(['profile', 'errorCode'], 0);
    }

    case ProfileActions.PROFILE_FETCH_SUCCESS:
    {
      return state
        .setIn(['profile', 'isPending'], false)
        .setIn(['profile', 'isSuccess'], true)
        .setIn(['profile', 'item'], fromJS(action.payload));
    }

    case ProfileActions.PROFILE_FETCH_ERROR:
    {
      return state
        .setIn(['profile', 'isPending'], false)
        .setIn(['profile', 'isError'], true)
        .setIn(['profile', 'errorCode'], action.payload.errorCode);
    }

    case ProfileActions.PROFILE_UPDATE_PENDING:
    {
      return state
        .setIn(['updateProfile', 'isPending'], true)
        .setIn(['updateProfile', 'isSuccess'], false)
        .setIn(['updateProfile', 'isError'], false)
        .setIn(['updateProfile', 'errorCode'], 0);
    }

    case ProfileActions.PROFILE_UPDATE_SUCCESS:
    {
      return state
        .setIn(['updateProfile', 'isPending'], false)
        .setIn(['updateProfile', 'isSuccess'], true)
        .setIn(['profile', 'item'], fromJS(action.payload));
    }

    case ProfileActions.PROFILE_UPDATE_ERROR:
    {
      return state
        .setIn(['updateProfile', 'isPending'], false)
        .setIn(['updateProfile', 'isError'], true)
        .setIn(['updateProfile', 'errorCode'], action.payload.errorCode);
    }

    default:
    {
      return state;
    }
  }
}
