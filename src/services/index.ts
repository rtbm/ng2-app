import { AuthService } from './auth.service';
import { QuotesService } from './quotes.service';
import { ServerService } from './server.service';
import { UsersService } from './users.service';

export * from './auth.service';
export * from './quotes.service';
export * from './server.service';
export * from './users.service';

export const SERVICES_PROVIDERS = [
  AuthService,
  QuotesService,
  ServerService,
  UsersService,
];
