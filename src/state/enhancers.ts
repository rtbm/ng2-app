import { fromJS } from 'immutable';
import { INITIAL_STATE } from '../reducers/session';
const persistState = require('redux-localstorage');

const enhancers = [
  persistState('session', {
    key: 'qt-app',
    serialize: store => store && store.session ? JSON.stringify(store.session.toJS()) : store,
    deserialize: state => ({ session: state ? fromJS(JSON.parse(state)) : fromJS(INITIAL_STATE) }),
  }),
];

export { enhancers };
