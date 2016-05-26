import { SessionActions } from '../actions/session';
import { Map, fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
    isPending: false,
    isError: false,
    isLogged: false,
    user: {},
});

export type ISession = Map<string, any>;

export function sessionReducer(state: ISession = INITIAL_STATE, action: any = { type: ''}) {
    switch(action.type) {
        case SessionActions.LOGIN_USER_PENDING: {
            return state.merge({ isPending: true, isError: false });
        }
        case SessionActions.LOGIN_USER_SUCCESS: {
            return state.merge({ isPending: false, isLogged: true, user: action.payload.user });
        }
        case SessionActions.LOGIN_USER_ERROR: {
            return state.merge({ isPending: false, isError: true });
        }
        default: {
            return state;
        }
    }
}
