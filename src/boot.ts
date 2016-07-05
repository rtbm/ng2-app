import 'reflect-metadata';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'ts-helpers';
import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideRouter } from '@angular/router';
import { NgRedux } from 'ng2-redux';
import { ServerService, AuthService, QuotesService, UsersService, InvitesService, CirclesService } from './services';
import { SessionActions, DashboardActions, UserActions, UsersActions, CirclesActions } from './actions';
import { QtAppComponent } from './app.component';
import { ACCOUNT_ROUTES, HOME_ROUTES, USER_ROUTES } from './routes';

declare let __PRODUCTION__: any;

if (__PRODUCTION__) {
  enableProdMode();
} else {
  require("zone.js/dist/long-stack-trace-zone");
}

bootstrap(QtAppComponent, [
  NgRedux,
  HTTP_PROVIDERS,
  provideRouter([
    ...ACCOUNT_ROUTES,
    ...HOME_ROUTES,
    ...USER_ROUTES,
  ]),
  ServerService,
  AuthService,
  UserActions,
  QuotesService,
  SessionActions,
  DashboardActions,
  UsersActions,
  UsersService,
  InvitesService,
  CirclesService,
  CirclesActions,
]);
