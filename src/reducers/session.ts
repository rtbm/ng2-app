import { SessionActions } from '../actions/session';
import { Map, fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
    token: '',
    user: {},
});

export type ISession = Map<string, any>;


export function sessionReducer(state: ISession = INITIAL_STATE, action: any = { type: ''}) {
    switch(action.type) {
        case SessionActions.LOGIN_USER_PENDING: {
            return state;
        }
        case SessionActions.LOGIN_USER_SUCCESS: {
            return state;
        }
        case SessionActions.LOGIN_USER_ERROR: {
            return state;
        }
        default: {
            return state;
        }
    }
}
