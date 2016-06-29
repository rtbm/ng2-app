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
import { ServerService } from './services/server';
import { AuthService } from './services/auth';
import { SessionActions } from './actions/session';
import { QtAppComponent } from './app.component';
import { QuotesService } from './services/quotes';
import { DashboardActions } from './actions/dashboard';
import { UserActions } from './actions/user';
import { ACCOUNT_ROUTES, HOME_ROUTES, USER_ROUTES } from './routes';
import { UsersActions } from './actions';
import { UsersService } from './services';

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
]);
