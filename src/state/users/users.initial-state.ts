import {
  IUsersRecord,
  IUsers,
} from './users.types';

import { makeTypedFactory } from 'typed-immutable-record';
import { fromJS } from 'immutable';

export const UsersFactory = makeTypedFactory<IUsers, IUsersRecord>({
  users: fromJS({
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
    items: [],
  }),

  follow: fromJS({
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
    item: {},
  }),

  unfollow: fromJS({
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
    item: {},
  }),
});

export const INITIAL_STATE = UsersFactory();
