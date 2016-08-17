import { AuthService } from './auth.service';
import { QuotesService } from './quotes.service';
import { ServerService } from './server.service';
import { UsersService } from './users.service';

export const SERVICES_PROVIDERS = [
  AuthService,
  QuotesService,
  ServerService,
  UsersService,
];

export {
  AuthService,
  QuotesService,
  ServerService,
  UsersService,
}
