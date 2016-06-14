import { DashboardActions } from '../actions/dashboard';
import { Map, fromJS } from 'immutable';

export const INITIAL_STATE = fromJS({
  quotes: {
    isPending: false,
    isError: false,
    isSuccess: false,
    items: [],
  },
  saveItem: {
    isPending: false,
    isError: false,
    isSuccess: false,
    item: {},
  },
  updateItem: {
    isPending: false,
    isError: false,
    isSuccess: false,
    item: {},
  },
  removeItem: {
    item: {},
    isPending: false,
    isError: false,
    isSuccess: false,
    isConfirmVisible: false,
    status: 0,
  }
});

export type IDashboard = Map<string, any>;

export function dashboardReducer(state: IDashboard = INITIAL_STATE, action: any = { type: '' }) {
  switch (action.type) {
    case DashboardActions.DASHBOARD_QUOTES_FETCH_PENDING:
    {
      return state.mergeDeep({
        quotes: {
          isPending: true,
          isError: false,
          isSuccess: false,
        }
      });
    }

    case DashboardActions.DASHBOARD_QUOTES_FETCH_SUCCESS:
    {
      return state.merge({
        quotes: {
          isPending: false,
          isError: false,
          isSuccess: true,
          items: action.payload,
        }
      });
    }

    case DashboardActions.DASHBOARD_QUOTES_FETCH_ERROR:
    {
      return state.merge({
        quotes: {
          isPending: false,
          isError: true,
        }
      });
    }

    case DashboardActions.DASHBOARD_QUOTE_REMOVE_CONFIRM:
    {
      return state.merge({
        removeItem: {
          item: action.payload,
          isConfirmVisible: true,
        }
      });
    }

    case DashboardActions.DASHBOARD_QUOTE_REMOVE_CONFIRM_CANCEL:
    {
      return state.merge({
        removeItem: {
          item: {},
          isConfirmVisible: false,
        }
      });
    }

    case DashboardActions.DASHBOARD_QUOTE_REMOVE_PENDING:
    {
      return state.merge({
        removeItem: {
          isPending: true,
          isError: false,
          isSuccess: false,
          isConfirmVisible: false,
        }
      });
    }

    case DashboardActions.DASHBOARD_QUOTE_REMOVE_ERROR:
    {
      return state.merge({
        removeItem: {
          isPending: false,
          isError: true,
          status: action.payload.status,
        }
      });
    }

    case DashboardActions.DASHBOARD_QUOTE_REMOVE_SUCCESS:
    {
      return state.merge({
        removeItem: {
          isPending: false,
          isSuccess: true,
          item: action.payload,
        }
      });
    }

    default:
    {
      return state;
    }
  }
}
