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
import { QtApp } from './app';
import { QuotesService } from './services/quotes';
import { DashboardActions } from './actions/dashboard';
import { UserActions } from './actions/user';
import { ROUTER_CONFIG } from './router.config';

declare let __PRODUCTION__: any;

if (__PRODUCTION__) {
  enableProdMode();
} else {
  require('zone.js/dist/long-stack-trace-zone');
}

bootstrap(QtApp, [
  NgRedux,
  HTTP_PROVIDERS,
  provideRouter(ROUTER_CONFIG),
  ServerService,
  AuthService,
  UserActions,
  QuotesService,
  SessionActions,
  DashboardActions,
]);
