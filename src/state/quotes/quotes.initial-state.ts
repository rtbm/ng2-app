import { makeTypedFactory } from 'typed-immutable-record';
import { fromJS } from 'immutable';

import {
  IQuotesRecord,
  IQuotes,
} from './quotes.types';

export const QuotesFactory = makeTypedFactory<IQuotes, IQuotesRecord>({
  quotes: fromJS({
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
    items: [],
    pagination: {
      limit: 0,
      offset: 0,
      page: 0,
      pages: 0,
      total: 0,
    },
  }),

  saveQuote: fromJS({
    isModalVisible: false,
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
    item: {},
  }),

  updateQuote: fromJS({
    isModalVisible: false,
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
    item: {},
  }),

  removeQuote: fromJS({
    isConfirmVisible: false,
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
    item: {},
  }),

  recommendQuote: fromJS({
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
    item: {},
  }),

  unrecommendQuote: fromJS({
    isPending: false,
    isSuccess: false,
    isError: false,
    errorCode: 0,
    item: {},
  }),
});

export const INITIAL_STATE = QuotesFactory();
