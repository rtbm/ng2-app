import {Iterable} from 'immutable';

function stateTransformer(state) {
  const newState = {};
  for (let i of Object.keys(state)) {
    newState[i] = Iterable.isIterable(state[i]) ? state[i].toJS() : state[i];
  }
  return newState;
}

const middlewares = [
  require('redux-logger')({
    level: 'info',
    collapsed: true,
    stateTransformer,
  }),
];

export {middlewares};
