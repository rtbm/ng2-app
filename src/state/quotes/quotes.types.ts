import { TypedRecord } from 'typed-immutable-record';

export interface IQuotes {
  quotes: {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorCode: number;
    items: any;
  };

  saveQuote: {
    isModalVisible: boolean;
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorCode: number;
    item: any;
  };

  updateQuote: {
    isModalVisible: boolean;
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorCode: number;
    item: any,
  };

  removeQuote: {
    isConfirmVisible: boolean;
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorCode: number;
    item: any;
  };

  recommendQuote: {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorCode: number;
    item: any;
  };

  unrecommendQuote: {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorCode: number;
    item: any;
  };
}

export interface IQuotesRecord extends TypedRecord<IQuotesRecord>, IQuotes {
}
