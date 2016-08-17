import { TypedRecord } from 'typed-immutable-record';

export interface IProfile {
  user: {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorCode: number;
    item: any;
  };

  updateUser: {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorCode: number;
  };
}

export interface IProfileRecord extends TypedRecord<IProfileRecord>, IProfile {
}
