import { fromJS } from 'immutable';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';
const persistState = require('redux-localstorage');

const enhancers = [
  persistState('session', {
    key: 'qt-app-session',
    serialize: store => {
      if (store && store.session) {
        const session = store.session.toJS();
        session.user = {};
        return JSON.stringify(session);
      }
      return store;
    },
    deserialize: state => {
      if (state) {
        const session = JSON.parse(state);
        session.user = session.id_token ? new JwtHelper().decodeToken(session.id_token) : {};
        return { session: fromJS(session) };
      }
      return { session: fromJS({}) };
    },
  }),
];

export { enhancers };
