import { TypedRecord } from 'typed-immutable-record';

export interface IUsers {
  users: {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorCode: number;
    items: any;
  };

  follow: {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorCode: number;
    item: any;
  };

  unfollow: {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorCode: number;
    item: any;
  };
}

export interface IUsersRecord extends TypedRecord<IUsersRecord>, IUsers {
}
