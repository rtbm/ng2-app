import { fromJS } from 'immutable';
import { JwtHelper } from 'angular2-jwt';

function sessionStore() {
  return next => (reducer, initialState) => {
    const id_token = localStorage.getItem('id_token');
    const user = !!id_token ? new JwtHelper().decodeToken(id_token) : {};

    const userState = {
      user: fromJS({
        id_token,
        user,
      }),
    };

    const store = next(reducer, userState);

    store.subscribe(() => {
      const state = store.getState();
      localStorage.setItem('id_token', state.user.get('id_token'));
    });

    return store;
  };
}

const enhancers = [
  sessionStore(),
];

export { enhancers };
