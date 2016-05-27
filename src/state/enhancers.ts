import {fromJS} from 'immutable';
import {SESSION_INITIAL_STATE} from '../reducers/session';
const persistState = require('redux-localstorage');

const enhancers = [
  persistState('session', {
    key: 'ng2-app',
    serialize: store => store && store.session ? JSON.stringify(store.session.toJS()) : store,
    deserialize: state => ({ session: state ? fromJS(JSON.parse(state)) : fromJS(SESSION_INITIAL_STATE) }),
  }),
];

export {enhancers};
