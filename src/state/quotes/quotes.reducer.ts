import { IPayloadAction, QuotesActions } from '../../actions';
import { fromJS } from 'immutable';
import { IQuotesRecord } from './quotes.types';
import { INITIAL_STATE } from './quotes.initial-state';

export function quotesReducer(state: IQuotesRecord = INITIAL_STATE, action: IPayloadAction): IQuotesRecord {
  switch (action.type) {
    case QuotesActions.QUOTES_FETCH:
    {
      return state
        .setIn(['quotes', 'isPending'], true)
        .setIn(['quotes', 'isSuccess'], false)
        .setIn(['quotes', 'isError'], false)
        .setIn(['quotes', 'errorCode'], 0);
    }

    case QuotesActions.QUOTES_FETCH_SUCCESS:
    {
      return state
        .setIn(['quotes', 'isPending'], false)
        .setIn(['quotes', 'isSuccess'], true)
        .setIn(['quotes', 'items'], fromJS(action.payload.docs))
        .setIn(['quotes', 'pagination', 'limit'], action.payload.limit)
        .setIn(['quotes', 'pagination', 'offset'], action.payload.offset)
        .setIn(['quotes', 'pagination', 'page'], action.payload.page)
        .setIn(['quotes', 'pagination', 'pages'], action.payload.pages)
        .setIn(['quotes', 'pagination', 'total'], action.payload.total);
    }

    case QuotesActions.QUOTES_FETCH_ERROR:
    {
      return state
        .setIn(['quotes', 'isPending'], false)
        .setIn(['quotes', 'isError'], true)
        .setIn(['quotes', 'errorCode'], action.payload.errorCode);
    }

    case QuotesActions.QUOTE_SAVE_MODAL:
    {
      return state
        .setIn(['saveQuote', 'isModalVisible'], true);
    }

    case QuotesActions.QUOTE_SAVE_MODAL_CANCEL:
    {
      return state
        .setIn(['saveQuote', 'isModalVisible'], false);
    }

    case QuotesActions.QUOTE_SAVE:
    {
      return state
        .setIn(['saveQuote', 'isPending'], true)
        .setIn(['saveQuote', 'isSuccess'], false)
        .setIn(['saveQuote', 'isError'], false)
        .setIn(['saveQuote', 'errorCode'], 0);
    }

    case QuotesActions.QUOTE_SAVE_SUCCESS:
    {
      return state
        .setIn(['saveQuote', 'isModalVisible'], false)
        .setIn(['saveQuote', 'isPending'], false)
        .setIn(['saveQuote', 'isSuccess'], true)
        .updateIn(['quotes', 'items'],
          list => list.unshift(fromJS(action.payload))
        );
    }

    case QuotesActions.QUOTE_SAVE_ERROR:
    {
      return state
        .setIn(['saveQuote', 'isPending'], false)
        .setIn(['saveQuote', 'isError'], true)
        .setIn(['saveQuote', 'errorCode'], action.payload.errorCode);
    }

    case QuotesActions.QUOTE_UPDATE_MODAL:
    {
      return state
        .setIn(['updateQuote', 'isPending'], true)
        .setIn(['updateQuote', 'isSuccess'], false)
        .setIn(['updateQuote', 'isError'], false)
        .setIn(['updateQuote', 'errorCode'], 0)
        .setIn(['updateQuote', 'item'], fromJS({}));
    }

    case QuotesActions.QUOTE_UPDATE_MODAL_SUCCESS:
    {
      return state
        .setIn(['updateQuote', 'isModalVisible'], true)
        .setIn(['updateQuote', 'isPending'], false)
        .setIn(['updateQuote', 'isSuccess'], true)
        .setIn(['updateQuote', 'item'], fromJS(action.payload));
    }

    case QuotesActions.QUOTE_UPDATE_MODAL_ERROR:
    {
      return state
        .setIn(['updateQuote', 'isPending'], false)
        .setIn(['updateQuote', 'isError'], true)
        .setIn(['updateQuote', 'errorCode'], action.payload.errorCode);
    }

    case QuotesActions.QUOTE_UPDATE_MODAL_CANCEL:
    {
      return state
        .setIn(['updateQuote', 'isModalVisible'], false)
        .setIn(['updateQuote', 'item'], fromJS({}));
    }

    case QuotesActions.QUOTE_UPDATE:
    {
      return state
        .setIn(['updateQuote', 'isPending'], true)
        .setIn(['updateQuote', 'isSuccess'], false)
        .setIn(['updateQuote', 'isError'], false)
        .setIn(['updateQuote', 'errorCode'], 0)
        .setIn(['updateQuote', 'item'], fromJS(action.payload));
    }

    case QuotesActions.QUOTE_UPDATE_SUCCESS:
    {
      return state
        .setIn(['updateQuote', 'isModalVisible'], false)
        .setIn(['updateQuote', 'isPending'], false)
        .setIn(['updateQuote', 'isSuccess'], true)
        .updateIn(['quotes', 'items'], list => list.update(
          list.findIndex(item => item.get('_id') === action.payload._id),
          item => fromJS(action.payload)
        ));
    }

    case QuotesActions.QUOTE_UPDATE_ERROR:
    {
      return state
        .setIn(['updateQuote', 'isPending'], false)
        .setIn(['updateQuote', 'isError'], true)
        .setIn(['updateQuote', 'errorCode'], action.payload.errorCode);
    }

    case QuotesActions.QUOTE_REMOVE_CONFIRM:
    {
      return state
        .setIn(['removeQuote', 'isConfirmVisible'], true)
        .setIn(['removeQuote', 'item'], fromJS(action.payload));
    }

    case QuotesActions.QUOTE_REMOVE_CONFIRM_CANCEL:
    {
      return state
        .setIn(['removeQuote', 'isConfirmVisible'], false)
        .setIn(['removeQuote', 'item'], fromJS({}));
    }

    case QuotesActions.QUOTE_REMOVE:
    {
      return state
        .setIn(['removeQuote', 'isConfirmVisible'], false)
        .setIn(['removeQuote', 'isPending'], true)
        .setIn(['removeQuote', 'isSuccess'], false)
        .setIn(['removeQuote', 'isError'], false)
        .setIn(['removeQuote', 'errorCode'], 0);
    }

    case QuotesActions.QUOTE_REMOVE_SUCCESS:
    {
      return state
        .setIn(['removeQuote', 'isPending'], false)
        .setIn(['removeQuote', 'isSuccess'], true)
        .setIn(['removeQuote', 'item'], fromJS(action.payload))
        .updateIn(['quotes', 'items'],
          list => list.filter(item => item.get('_id') !== action.payload._id)
        );
    }

    case QuotesActions.QUOTE_REMOVE_ERROR:
    {
      return state
        .setIn(['removeQuote', 'isPending'], false)
        .setIn(['removeQuote', 'isError'], true)
        .setIn(['removeQuote', 'errorCode'], action.payload.errorCode);
    }

    case QuotesActions.QUOTE_RECOMMEND:
    {
      return state
        .setIn(['recommendQuote', 'isPending'], true)
        .setIn(['recommendQuote', 'isSuccess'], false)
        .setIn(['recommendQuote', 'isError'], false)
        .setIn(['recommendQuote', 'errorCode'], 0);
    }

    case QuotesActions.QUOTE_RECOMMEND_SUCCESS:
    {
      return state
        .setIn(['recommendQuote', 'isPending'], false)
        .setIn(['recommendQuote', 'isSuccess'], true)
        .setIn(['recommendQuote', 'item'], fromJS(action.payload))
        .updateIn(['quotes', 'items'], list => list.update(
          list.findIndex(item => item.get('_id') === action.payload._id),
          item => fromJS(action.payload)
        ));
    }

    case QuotesActions.QUOTE_RECOMMEND_ERROR:
    {
      return state
        .setIn(['recommendQuote', 'isPending'], false)
        .setIn(['recommendQuote', 'isError'], true)
        .setIn(['recommendQuote', 'errorCode'], action.payload.errorCode);
    }

    case QuotesActions.QUOTE_UNRECOMMEND:
    {
      return state
        .setIn(['unrecommendQuote', 'isPending'], true)
        .setIn(['unrecommendQuote', 'isSuccess'], false)
        .setIn(['unrecommendQuote', 'isError'], false)
        .setIn(['unrecommendQuote', 'errorCode'], 0);
    }

    case QuotesActions.QUOTE_UNRECOMMEND_SUCCESS:
    {
      return state
        .setIn(['unrecommendQuote', 'isPending'], false)
        .setIn(['unrecommendQuote', 'isSuccess'], true)
        .setIn(['unrecommendQuote', 'item'], fromJS(action.payload))
        .updateIn(['quotes', 'items'], list => list.update(
          list.findIndex(item => item.get('_id') === action.payload._id),
          item => fromJS(action.payload)
        ));
    }

    case QuotesActions.QUOTE_UNRECOMMEND_ERROR:
    {
      return state
        .setIn(['unrecommendQuote', 'isPending'], false)
        .setIn(['unrecommendQuote', 'isError'], true)
        .setIn(['unrecommendQuote', 'errorCode'], action.payload.errorCode);
    }

    default:
    {
      return state;
    }
  }
}
