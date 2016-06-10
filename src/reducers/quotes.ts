import { QuotesActions } from '../actions/quotes';
import { Map, fromJS } from 'immutable';

export const INITIAL_STATE = fromJS({
  isPending: false,
  isError: false,
  isSuccess: false,
  items: [],
});

export type IQuotes = Map<string, any>;

export function quotesReducer(state: IQuotes = INITIAL_STATE, action: any = { type: '' }) {
  switch (action.type) {
    case QuotesActions.QUOTES_SAVE:
    {
      return state.updateIn(['items'], list => list.push(Map(action.payload)));
    }

    case QuotesActions.QUOTES_UPDATE:
    {
      return state.updateIn([
          'items',
          state.getIn(['items']).findIndex(item => item.get('_id') === action.payload._id)
        ],
        item => item.set('name', action.payload.name).set('content', action.payload.content)
      );
    }

    case QuotesActions.QUOTES_REMOVE:
    {
      return state.merge({
        items: state.get('items').filter(item => item.get('_id') !== action.payload._id)
      });
    }

    case QuotesActions.QUOTES_FETCH_PENDING:
    {
      return state.merge({ isPending: true, isError: false, isSuccess: false, items: [] });
    }

    case QuotesActions.QUOTES_FETCH_SUCCESS:
    {
      return state.merge({ isPending: false, isError: false, isSuccess: true, items: action.payload });
    }

    case QuotesActions.QUOTES_FETCH_ERROR:
    {
      return state.merge({ isPending: false, isError: true });
    }

    default:
    {
      return state;
    }
  }
}
