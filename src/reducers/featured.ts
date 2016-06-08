import { FeaturedActions } from '../actions/featured';
import { Map, fromJS } from 'immutable';

export const FEATURED_INITIAL_STATE = fromJS({
  isPending: false,
  isError: false,
  isSuccess: false,
  items: [],
});

export type IFeatured = Map<string, any>;

export function featuredReducer(state: IFeatured = FEATURED_INITIAL_STATE, action: any = { type: '' }) {
  switch (action.type) {
    case FeaturedActions.FEATURED_SAVE:
    {
      return state.updateIn(['items'], list => list.push(Map(action.payload)));
    }

    case FeaturedActions.FEATURED_UPDATE:
    {
      return state.updateIn([
          'items',
          state.getIn(['items']).findIndex(item => item.get('_id') === action.payload._id)
        ],
        item => item.set('name', action.payload.name).set('content', action.payload.content)
      );
    }

    case FeaturedActions.FEATURED_REMOVE:
    {
      return state.merge({
        items: state.get('items').filter(item => item.get('_id') !== action.payload._id)
      });
    }

    case FeaturedActions.FEATURED_FETCH_PENDING:
    {
      return state.merge({ isPending: true, isError: false, isSuccess: false, items: [] });
    }

    case FeaturedActions.FEATURED_FETCH_SUCCESS:
    {
      return state.merge({ isPending: false, isError: false, isSuccess: true, items: action.payload });
    }

    case FeaturedActions.FEATURED_FETCH_ERROR:
    {
      return state.merge({ isPending: false, isError: true });
    }

    default:
    {
      return state;
    }
  }
}
