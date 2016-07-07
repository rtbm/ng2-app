import { ProfileActions } from '../actions/profile';
import { Map, fromJS } from 'immutable';

export const INITIAL_STATE = fromJS({
  isPending: false,
  isSuccess: false,
  isError: false,
  errorCode: 0,
  item: {},
});

export type IProfile = Map<string, any>;

export function profileReducer(state: IProfile = INITIAL_STATE, action: any = { type: '' }) {
  switch (action.type) {
    case ProfileActions.PROFILE_FETCH_PENDING:
    {
      return state.merge({
        isPending: true,
        isSuccess: false,
        isError: false,
        errorCode: 0,
      });
    }

    case ProfileActions.PROFILE_FETCH_SUCCESS:
    {
      return state.merge({
        isPending: false,
        isSuccess: true,
        item: action.payload,
      });
    }

    case ProfileActions.PROFILE_FETCH_ERROR:
    {
      return state.merge({
        isPending: false,
        isError: true,
        errorCode: action.payload.errorCode,
      });
    }

    case ProfileActions.PROFILE_UPDATE_PENDING:
    {
      return state.merge({
        isPending: true,
        isSuccess: false,
        isError: false,
        errorCode: 0,
        item: action.payload,
      });
    }

    case ProfileActions.PROFILE_UPDATE_SUCCESS:
    {
      return state.merge({
        isPending: false,
        isSuccess: true,
      });
    }

    case ProfileActions.PROFILE_UPDATE_ERROR:
    {
      return state.merge({
        isPending: false,
        isError: true,
        errorCode: action.payload.errorCode,
      });
    }

    default:
    {
      return state;
    }
  }
}
