import { AuthService } from './auth.service';
import { CirclesService } from './circles.service';
import { InvitesService } from './invites.service';
import { QuotesService } from './quotes.service';
import { ServerService } from './server.service';
import { UsersService } from './users.service';

export * from './auth.service';
export * from './circles.service';
export * from './invites.service';
export * from './quotes.service';
export * from './server.service';
export * from './users.service';

export const SERVICES_PROVIDERS = [
  AuthService,
  CirclesService,
  InvitesService,
  QuotesService,
  ServerService,
  UsersService,
];
