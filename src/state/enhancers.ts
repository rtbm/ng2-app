import { fromJS } from 'immutable';
const persistState = require('redux-localstorage');

const enhancers = [
  persistState('session', {
    key: 'qt-app-session',
    serialize: store => store && store.session ? JSON.stringify(store.session.toJS()) : store,
    deserialize: state => ({ session: state ? fromJS(JSON.parse(state)) : fromJS({}) }),
  }),
];

export { enhancers };
