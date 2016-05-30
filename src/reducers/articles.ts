import {ArticlesActions} from '../actions/articles';
import {Map, fromJS} from 'immutable';

export const ARTICLES_INITIAL_STATE = fromJS({
  isPending: false,
  isError: false,
  isSuccess: false,
  articles: [],
});

export type IArticles = Map<string, any>;

export function articlesReducer(state: IArticles = ARTICLES_INITIAL_STATE, action: any = { type: ''}) {
  switch(action.type) {
    case ArticlesActions.ARTICLES_SAVE: {
      return state.updateIn(['articles'], list => list.push(Map(action.payload)));
    }

    case ArticlesActions.ARTICLES_UPDATE: {
      return state.updateIn([
          'articles',
          state.getIn(['articles']).findIndex(article => article.get('_id') === action.payload._id)
        ],
        item => item.set('name', action.payload.name).set('content', action.payload.content)
      );
    }

    case ArticlesActions.ARTICLES_DELETE: {
      return state.merge({
        articles: state.get('articles').filter(article => article.get('_id') !== action.payload._id)
      });
    }

    case ArticlesActions.ARTICLES_FETCH_PENDING: {
      return state.merge({ isPending: true, isError: false, isSuccess: false, articles: [] });
    }

    case ArticlesActions.ARTICLES_FETCH_SUCCESS: {
      return state.merge({ isPending: false, isError: false, isSuccess: true, articles: action.payload });
    }

    case ArticlesActions.ARTICLES_FETCH_ERROR: {
      return state.merge({ isPending: false, isError: true });
    }

    default: {
      return state;
    }
  }
}
