import { QuoteActions } from '../actions/quote';
import { Map, fromJS } from 'immutable';

export const INITIAL_STATE = fromJS({
  isPending: false,
  isError: false,
  isSuccess: false,
  item: {},
});

export type IQuote = Map<string, any>;

export function quoteReducer(state: IQuote = INITIAL_STATE, action: any = { type: '' }) {
  switch (action.type) {
    case QuoteActions.QUOTE_FETCH_PENDING:
    {
      return state.merge({ isPending: true, isError: false, isSuccess: false });
    }

    case QuoteActions.QUOTE_FETCH_SUCCESS:
    {
      return state.merge({ isPending: false, isSuccess: true, item: action.payload });
    }

    case QuoteActions.QUOTE_FETCH_ERROR:
    {
      return state.merge({ isPending: false, isError: true });
    }

    case QuoteActions.QUOTE_SAVE_PENDING:
    {
      return state.merge({ isPending: true, isError: false, isSuccess: false });
    }

    case QuoteActions.QUOTE_SAVE_SUCCESS:
    {
      return state.merge({ isPending: false, isSuccess: true });
    }

    case QuoteActions.QUOTE_SAVE_ERROR:
    {
      return state.merge({ isPending: false, isError: true });
    }

    case QuoteActions.QUOTE_UPDATE_PENDING:
    {
      return state.merge({ isPending: true, isError: false, isSuccess: false });
    }

    case QuoteActions.QUOTE_UPDATE_SUCCESS:
    {
      return state.merge({ isPending: false, isSuccess: true });
    }

    case QuoteActions.QUOTE_UPDATE_ERROR:
    {
      return state.merge({ isPending: false, isError: true });
    }

    case QuoteActions.QUOTE_REMOVE_PENDING:
    {
      return state.merge({ isPending: true, isError: false, isSuccess: false });
    }

    case QuoteActions.QUOTE_REMOVE_ERROR:
    {
      return state.merge({ isPending: false, isError: true });
    }

    case QuoteActions.QUOTE_REMOVE_SUCCESS:
    {
      return state.merge({ isPending: false, isSuccess: true });
    }

    default:
    {
      return state;
    }
  }
}
