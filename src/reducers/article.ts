import {ArticleActions} from '../actions/article';
import {Map, fromJS} from 'immutable';

export const ARTICLE_INITIAL_STATE = fromJS({
  isPending: false,
  isError: false,
  isSuccess: false,
  article: {},
});

export type IArticle = Map<string, any>;

export function articleReducer(state: IArticle = ARTICLE_INITIAL_STATE, action: any = { type: ''}) {
  switch(action.type) {
    case ArticleActions.ARTICLE_FETCH_PENDING: {
      return state.merge({ isPending: true, isError: false, isSuccess: false });
    }

    case ArticleActions.ARTICLE_FETCH_SUCCESS: {
      return state.merge({ isPending: false, isSuccess: true, article: action.payload });
    }

    case ArticleActions.ARTICLE_FETCH_ERROR: {
      return state.merge({ isPending: false, isError: true });
    }

    case ArticleActions.ARTICLE_SAVE_PENDING: {
      return state.merge({ isPending: true, isError: false, isSuccess: false });
    }

    case ArticleActions.ARTICLE_SAVE_SUCCESS: {
      return state.merge({ isPending: false, isSuccess: true });
    }

    case ArticleActions.ARTICLE_SAVE_ERROR: {
      return state.merge({ isPending: false, isError: true });
    }

    case ArticleActions.ARTICLE_UPDATE_PENDING: {
      return state.merge({ isPending: true, isError: false, isSuccess: false });
    }

    case ArticleActions.ARTICLE_UPDATE_SUCCESS: {
      return state.merge({ isPending: false, isSuccess: true });
    }

    case ArticleActions.ARTICLE_UPDATE_ERROR: {
      return state.merge({ isPending: false, isError: true });
    }

    case ArticleActions.ARTICLE_REMOVE_PENDING: {
      return state.merge({ isPending: true, isError: false, isSuccess: false });
    }

    case ArticleActions.ARTICLE_REMOVE_ERROR: {
      return state.merge({ isPending: false, isError: true });
    }

    case ArticleActions.ARTICLE_REMOVE_SUCCESS: {
      return state.merge({ isPending: false, isSuccess: true });
    }

    default: {
      return state;
    }
  }
}
