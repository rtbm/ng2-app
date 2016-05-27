import {ArticlesActions} from '../actions/article';
import {Map, fromJS} from 'immutable';

export const ARTICLE_INITIAL_STATE = fromJS({
    isPending: false,
    isError: false,
    isSuccess: false
});

export type IArticle = Map<string, any>;

export function articleReducer(state: IArticle = ARTICLE_INITIAL_STATE, action: any = { type: ''}) {
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
        default: {
            return state;
        }
    }
}
