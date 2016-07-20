import { CirclesEpics } from './circles.epics';
import { ProfileEpics } from './profile.epics';
import { QuotesEpics } from './quotes.epics';
import { UserEpics } from './user.epics';
import { UsersEpics } from './users.epics';

export * from './circles.epics';
export * from './profile.epics';
export * from './quotes.epics';
export * from './user.epics';
export * from './users.epics';

export const EPICS_PROVIDERS = [
  CirclesEpics,
  ProfileEpics,
  QuotesEpics,
  UserEpics,
  UsersEpics,
];
