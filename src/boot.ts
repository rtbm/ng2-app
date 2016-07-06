import 'reflect-metadata';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'ts-helpers';

import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideRouter } from '@angular/router';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { NgRedux } from 'ng2-redux';

import {
  ServerService,
  AuthService,
  QuotesService,
  UsersService,
  InvitesService,
  CirclesService,
  ProfileService,
} from './services';

import {
  SessionActions,
  QuotesActions,
  UserActions,
  UsersActions,
  CirclesActions,
  ProfileActions,
} from './actions';

import { ACCOUNT_ROUTES, HOME_ROUTES, USER_ROUTES } from './routes';
import { QtAppComponent } from './app.component';

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
  disableDeprecatedForms(),
  provideForms(),
  ServerService,
  AuthService,
  UserActions,
  QuotesService,
  SessionActions,
  QuotesActions,
  UsersActions,
  UsersService,
  InvitesService,
  CirclesService,
  CirclesActions,
  ProfileService,
  ProfileActions,
]);
