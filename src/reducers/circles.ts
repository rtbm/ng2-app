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
    case CirclesActions.CIRCLES_CIRCLES_FETCH_PENDING:
    {
      return state
        .setIn(['circles', 'isPending'], true)
        .setIn(['circles', 'isSuccess'], false)
        .setIn(['circles', 'isError'], false)
        .setIn(['circles', 'errorCode'], 0);
    }

    case CirclesActions.CIRCLES_CIRCLES_FETCH_SUCCESS:
    {
      return state
        .setIn(['circles', 'isPending'], false)
        .setIn(['circles', 'isSuccess'], true)
        .setIn(['circles', 'items'], fromJS(action.payload));
    }

    case CirclesActions.CIRCLES_CIRCLES_FETCH_ERROR:
    {
      return state
        .setIn(['circles', 'isPending'], false)
        .setIn(['circles', 'isError'], true)
        .setIn(['circles', 'errorCode'], action.payload.errorCode);
    }

    default:
    {
      return state;
    }
  }
}
