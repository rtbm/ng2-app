import { TypedRecord } from 'typed-immutable-record';

export interface IUser {
  id_token: string;
  user: any;

  signup: {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorCode: number;
  };

  signin: {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorCode: number;
  };

  resetPassword: {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorCode: number;
  };
}

export interface IUserRecord extends TypedRecord<IUserRecord>, IUser {
}
