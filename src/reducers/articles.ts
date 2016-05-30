import {ArticlesActions} from '../actions/articles';
import {Map, fromJS} from 'immutable';

export const ARTICLES_INITIAL_STATE = fromJS({
  isPending: false,
  isError: false,
  isSuccess: false,
  article: {},
  articles: [],
});

export type IArticles = Map<string, any>;

export function articlesReducer(state: IArticles = ARTICLES_INITIAL_STATE, action: any = { type: ''}) {
  switch(action.type) {
    case ArticlesActions.ARTICLES_FETCH_PENDING: {
      return state.merge({ isPending: true, isError: false, isSuccess: false });
    }

    case ArticlesActions.ARTICLES_FETCH_SUCCESS: {
      return state.merge({ isPending: false, isSuccess: true, articles: action.payload });
    }

    case ArticlesActions.ARTICLES_FETCH_ERROR: {
      return state.merge({ isPending: false, isError: true, articles: [] });
    }

    case ArticlesActions.ARTICLE_FETCH_PENDING: {
      return state.merge({ isPending: true, isError: false, isSuccess: false });
    }

    case ArticlesActions.ARTICLE_FETCH_SUCCESS: {
      return state.merge({ isPending: false, isSuccess: true, article: action.payload });
    }

    case ArticlesActions.ARTICLE_FETCH_ERROR: {
      return state.merge({ isPending: false, isError: true, article: {} });
    }

    case ArticlesActions.ARTICLE_SAVE_PENDING: {
      return state.merge({ isPending: true, isError: false, isSuccess: false });
    }

    case ArticlesActions.ARTICLE_SAVE_SUCCESS: {
      const newState = state.updateIn(['articles'],
        list => list.push(Map(action.payload))
      );

      return newState.merge({ isPending: false, isSuccess: true });
    }

    case ArticlesActions.ARTICLE_SAVE_ERROR: {
      return state.merge({ isPending: false, isError: true });
    }

    case ArticlesActions.ARTICLE_UPDATE_PENDING: {
      return state.merge({ isPending: true, isError: false, isSuccess: false });
    }

    case ArticlesActions.ARTICLE_UPDATE_SUCCESS: {
      const newState = state.updateIn(['articles',
        state.getIn(['articles'])
          .findIndex(article => article.get('_id') === action.payload._id)
      ],
        item => item.set('name', action.payload.name)
          .set('content', action.payload.content)
      );

      newState.merge({ isPending: false, isSuccess: true });

      return newState;
    }

    case ArticlesActions.ARTICLE_UPDATE_ERROR: {
      return state.merge({ isPending: false, isError: true });
    }

    case ArticlesActions.ARTICLE_DELETE_PENDING: {
      return state.merge({ isPending: true, isError: false, isSuccess: false });
    }

    case ArticlesActions.ARTICLE_DELETE_ERROR: {
      return state.merge({ isPending: false, isError: true, isSuccess: false });
    }

    case ArticlesActions.ARTICLE_DELETE_SUCCESS: {
      return state.merge({
        articles: state.get('articles').filter(article => article.get('_id') !== action.payload._id)
      });
    }

    default: {
      return state;
    }
  }
}
