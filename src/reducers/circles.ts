import { CirclesActions } from '../actions/circles';
import { Map, fromJS } from 'immutable';

export const INITIAL_STATE = fromJS({
  circles: {
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
    items: [],
  },
});

export type ICircles = Map<string, any>;

export function circlesReducer(state: ICircles = INITIAL_STATE, action: any = { type: '' }) {
  switch (action.type) {
    case CirclesActions.CIRCLES_FETCH_PENDING:
    {
      return state
        .setIn(['users', 'isPending'], true)
        .setIn(['users', 'isSuccess'], false)
        .setIn(['users', 'isError'], false)
        .setIn(['users', 'errorCode'], 0);
    }

    case CirclesActions.CIRCLES_FETCH_SUCCESS:
    {
      return state
        .setIn(['users', 'isPending'], false)
        .setIn(['users', 'isSuccess'], true)
        .setIn(['users', 'items'], fromJS(action.payload));
    }

    case CirclesActions.CIRCLES_FETCH_ERROR:
    {
      return state
        .setIn(['users', 'isPending'], false)
        .setIn(['users', 'isError'], true)
        .setIn(['users', 'errorCode'], action.payload.errorCode);
    }

    default:
    {
      return state;
    }
  }
}
