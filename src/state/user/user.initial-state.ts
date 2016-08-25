import { makeTypedFactory } from 'typed-immutable-record';
import { fromJS } from 'immutable';

import {
  IUserRecord,
  IUser,
} from './user.types';

export const UserFactory = makeTypedFactory<IUser, IUserRecord>({
  id_token: '',
  user: fromJS({}),

  signup: fromJS({
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
  }),

  signin: fromJS({
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
  }),

  resetPassword: fromJS({
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
  }),
});

export const INITIAL_STATE = UserFactory();
