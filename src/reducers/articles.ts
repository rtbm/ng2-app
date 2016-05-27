import {ArticlesActions} from '../actions/articles';
import {Map, fromJS} from 'immutable';

export const ARTICLES_INITIAL_STATE = fromJS({
    isPending: false,
    isError: false,
    isSuccess: false,
    articles: []
});

export type IArticle = Map<string, any>;

export function articleReducer(state: IArticle = ARTICLES_INITIAL_STATE, action: any = { type: ''}) {
    switch(action.type) {
        case ArticlesActions.ARTICLE_SAVE_PENDING: {
            return state.merge({ isPending: true, isError: false, isSuccess: false });
        }

        case ArticlesActions.ARTICLE_SAVE_SUCCESS: {
            return state.merge({ isPending: false, isSuccess: true });
        }

        case ArticlesActions.ARTICLE_SAVE_ERROR: {
            return state.merge({ isPending: false, isError: true });
        }

        case ArticlesActions.ARTICLES_FETCH_PENDING: {
            return state.merge({ isPending: true, isError: false, isSuccess: false });
        }

        case ArticlesActions.ARTICLES_FETCH_SUCCESS: {
            return state.merge({ isPending: false, isSuccess: true, articles: action.payload });
        }

        case ArticlesActions.ARTICLES_FETCH_ERROR: {
            return state.merge({ isPending: false, isError: true, articles: [] });
        }

        default: {
            return state;
        }
    }
}
