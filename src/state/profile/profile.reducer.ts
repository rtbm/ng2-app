import { IPayloadAction, ProfileActions } from '../../actions';
import { fromJS } from 'immutable';
import { IProfileRecord } from './profile.types';
import { INITIAL_STATE } from './profile.initial-state';

export function profileReducer(state: IProfileRecord = INITIAL_STATE, action: IPayloadAction): IProfileRecord {
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
