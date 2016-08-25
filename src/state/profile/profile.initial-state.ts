import { makeTypedFactory } from 'typed-immutable-record';
import { fromJS } from 'immutable';

import {
  IProfileRecord,
  IProfile,
} from './profile.types';

export const ProfileFactory = makeTypedFactory<IProfile, IProfileRecord>({
  user: fromJS({
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
    item: {},
  }),

  updateUser: fromJS({
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
  }),
});

export const INITIAL_STATE = ProfileFactory();
