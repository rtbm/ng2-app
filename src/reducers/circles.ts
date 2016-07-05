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
  saveCircle: {
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
    item: {},
  },
  updateCircle: {
    isPending: false,
    isSuccess: false,
    isError: false,
    isModalVisible: false,
    errorCode: 0,
    item: {},
  },
  removeCircle: {
    isPending: false,
    isSuccess: false,
    isError: false,
    isConfirmVisible: false,
    errorCode: 0,
    item: {},
  },
});

export type ICircles = Map<string, any>;

export function circlesReducer(state: ICircles = INITIAL_STATE, action: any = { type: '' }) {
  switch (action.type) {
    case CirclesActions.CIRCLES_FETCH_PENDING:
    {
      return state
        .setIn(['circles', 'isPending'], true)
        .setIn(['circles', 'isSuccess'], false)
        .setIn(['circles', 'isError'], false)
        .setIn(['circles', 'errorCode'], 0);
    }

    case CirclesActions.CIRCLES_FETCH_SUCCESS:
    {
      return state
        .setIn(['circles', 'isPending'], false)
        .setIn(['circles', 'isSuccess'], true)
        .setIn(['circles', 'items'], fromJS(action.payload));
    }

    case CirclesActions.CIRCLES_FETCH_ERROR:
    {
      return state
        .setIn(['circles', 'isPending'], false)
        .setIn(['circles', 'isError'], true)
        .setIn(['circles', 'errorCode'], action.payload.errorCode);
    }

    case CirclesActions.CIRCLE_SAVE_PENDING:
    {
      return state
        .setIn(['saveCircle', 'isPending'], true)
        .setIn(['saveCircle', 'isSuccess'], false)
        .setIn(['saveCircle', 'isError'], false)
        .setIn(['saveCircle', 'errorCode'], 0);
    }

    case CirclesActions.CIRCLE_SAVE_SUCCESS:
    {
      return state
        .setIn(['saveCircle', 'isPending'], false)
        .setIn(['saveCircle', 'isSuccess'], true)
        .setIn(['saveCircle', 'item'], fromJS(action.payload));
    }

    case CirclesActions.CIRCLE_SAVE_ERROR:
    {
      return state
        .setIn(['saveCircle', 'isPending'], false)
        .setIn(['saveCircle', 'isError'], true)
        .setIn(['saveCircle', 'errorCode'], action.payload.errorCode);
    }

    case CirclesActions.CIRCLE_UPDATE_FETCH_PENDING:
    {
      return state
        .setIn(['updateCircle', 'isPending'], true)
        .setIn(['updateCircle', 'isSuccess'], false)
        .setIn(['updateCircle', 'isError'], false)
        .setIn(['updateCircle', 'errorCode'], 0)
        .setIn(['updateCircle', 'item'], fromJS({}));
    }

    case CirclesActions.CIRCLE_UPDATE_FETCH_SUCCESS:
    {
      return state
        .setIn(['updateCircle', 'isPending'], false)
        .setIn(['updateCircle', 'isSuccess'], true)
        .setIn(['updateCircle', 'item'], fromJS(action.payload));
    }

    case CirclesActions.CIRCLE_UPDATE_FETCH_ERROR:
    {
      return state
        .setIn(['updateCircle', 'isPending'], false)
        .setIn(['updateCircle', 'isError'], true)
        .setIn(['updateCircle', 'errorCode'], action.payload.errorCode);
    }

    case CirclesActions.CIRCLE_UPDATE_PENDING:
    {
      return state
        .setIn(['updateCircle', 'isPending'], true)
        .setIn(['updateCircle', 'isSuccess'], false)
        .setIn(['updateCircle', 'isError'], false)
        .setIn(['updateCircle', 'errorCode'], 0)
        .setIn(['updateCircle', 'item'], fromJS(action.payload));
    }

    case CirclesActions.CIRCLE_UPDATE_SUCCESS:
    {
      return state
        .setIn(['updateCircle', 'isPending'], false)
        .setIn(['updateCircle', 'isSuccess'], true)
        .setIn(['updateCircle', 'isModalVisible'], false)
        .setIn(['updateCircle', 'item'], fromJS(action.payload));
    }

    case CirclesActions.CIRCLE_UPDATE_ERROR:
    {
      return state
        .setIn(['updateCircle', 'isPending'], false)
        .setIn(['updateCircle', 'isError'], true)
        .setIn(['updateCircle', 'errorCode'], action.payload.errorCode);
    }

    case CirclesActions.CIRCLE_UPDATE_MODAL:
    {
      return state.setIn(['updateCircle', 'isModalVisible'], true);
    }

    case CirclesActions.CIRCLE_UPDATE_MODAL_CANCEL:
    {
      return state
        .setIn(['updateCircle', 'item'], fromJS({}))
        .setIn(['updateCircle', 'isModalVisible'], false);
    }

    case CirclesActions.CIRCLE_REMOVE_CONFIRM:
    {
      return state
        .setIn(['removeCircle', 'item'], fromJS(action.payload))
        .setIn(['removeCircle', 'isConfirmVisible'], true);
    }

    case CirclesActions.CIRCLE_REMOVE_CONFIRM_CANCEL:
    {
      return state
        .setIn(['removeCircle', 'item'], {})
        .setIn(['removeCircle', 'isConfirmVisible'], false);
    }

    case CirclesActions.CIRCLE_REMOVE_PENDING:
    {
      return state
        .setIn(['removeCircle', 'isPending'], true)
        .setIn(['removeCircle', 'isSuccess'], false)
        .setIn(['removeCircle', 'isError'], false)
        .setIn(['removeCircle', 'errorCode'], 0)
        .setIn(['removeCircle', 'isConfirmVisible'], false);
    }

    case CirclesActions.CIRCLE_REMOVE_SUCCESS:
    {
      return state
        .setIn(['removeCircle', 'isPending'], false)
        .setIn(['removeCircle', 'isSuccess'], true)
        .setIn(['removeCircle', 'item'], fromJS(action.payload));
    }

    case CirclesActions.CIRCLE_REMOVE_ERROR:
    {
      return state
        .setIn(['removeCircle', 'isPending'], false)
        .setIn(['removeCircle', 'isError'], true)
        .setIn(['removeCircle', 'errorCode'], action.payload.errorCode);
    }

    default:
    {
      return state;
    }
  }
}
