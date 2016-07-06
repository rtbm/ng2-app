import { ProfileActions } from '../actions/profile';
import { Map, fromJS } from 'immutable';

export const INITIAL_STATE = fromJS({
  profile: {
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
    _id: '',
    first_name: '',
    last_name: '',
    bio: '',
  }
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
        .setIn(['profile', '_id'], action.payload._id)
        .setIn(['profile', 'first_name'], action.payload.first_name)
        .setIn(['profile', 'last_name'], action.payload.last_name)
        .setIn(['profile', 'bio'], action.payload.bio);
    }

    case ProfileActions.PROFILE_FETCH_ERROR:
    {
      return state
        .setIn(['profile', 'isPending'], false)
        .setIn(['profile', 'isError'], true)
        .setIn(['profile', 'errorCode'], action.payload.errorCode);
    }

    case ProfileActions.PROFILE_SAVE_PENDING:
    {
      return state
        .setIn(['profile', 'isPending'], true)
        .setIn(['profile', 'isSuccess'], false)
        .setIn(['profile', 'isError'], false)
        .setIn(['profile', 'errorCode'], 0)
        .setIn(['profile', 'first_name'], action.payload.first_name)
        .setIn(['profile', 'last_name'], action.payload.last_name)
        .setIn(['profile', 'bio'], action.payload.bio);
    }

    case ProfileActions.PROFILE_SAVE_SUCCESS:
    {
      return state
        .setIn(['profile', 'isPending'], false)
        .setIn(['profile', 'isSuccess'], true);
    }

    case ProfileActions.PROFILE_SAVE_ERROR:
    {
      return state
        .setIn(['profile', 'isPending'], false)
        .setIn(['profile', 'isError'], true)
        .setIn(['profile', 'errorCode'], action.payload.errorCode);
    }

    default:
    {
      return state;
    }
  }
}
