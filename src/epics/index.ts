import { ProfileEpics } from './profile.epics';
import { QuotesEpics } from './quotes.epics';
import { UserEpics } from './user.epics';
import { UsersEpics } from './users.epics';

export * from './profile.epics';
export * from './quotes.epics';
export * from './user.epics';
export * from './users.epics';

export const EPICS_PROVIDERS = [
  ProfileEpics,
  QuotesEpics,
  UserEpics,
  UsersEpics,
];
