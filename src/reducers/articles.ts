import {ArticlesActions} from '../actions/articles';
import {Map, fromJS} from 'immutable';

export const ARTICLES_INITIAL_STATE = fromJS({
  isPending: false,
  isError: false,
  isSuccess: false,
  items: [],
});

export type IArticles = Map<string, any>;

export function articlesReducer(state: IArticles = ARTICLES_INITIAL_STATE, action: any = { type: ''}) {
  switch(action.type) {
    case ArticlesActions.ARTICLES_SAVE: {
      return state.updateIn(['items'], list => list.push(Map(action.payload)));
    }

    case ArticlesActions.ARTICLES_UPDATE: {
      return state.updateIn([
          'items',
          state.getIn(['items']).findIndex(item => item.get('_id') === action.payload._id)
        ],
        item => item.set('name', action.payload.name).set('content', action.payload.content)
      );
    }

    case ArticlesActions.ARTICLES_REMOVE: {
      return state.merge({
        items: state.get('items').filter(item => item.get('_id') !== action.payload._id)
      });
    }

    case ArticlesActions.ARTICLES_FETCH_PENDING: {
      return state.merge({ isPending: true, isError: false, isSuccess: false, items: [] });
    }

    case ArticlesActions.ARTICLES_FETCH_SUCCESS: {
      return state.merge({ isPending: false, isError: false, isSuccess: true, items: action.payload });
    }

    case ArticlesActions.ARTICLES_FETCH_ERROR: {
      return state.merge({ isPending: false, isError: true });
    }

    default: {
      return state;
    }
  }
}
