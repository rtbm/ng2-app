import 'reflect-metadata';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'ts-helpers';
import { enableProdMode, provide } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common/index';
import { NgRedux } from 'ng2-redux';
import { ServerService } from './services/server';
import { AuthService } from './services/auth';
import { SessionActions } from './actions/session';
import { QtApp } from './app';
import { QuotesService } from './services/quotes';
import { QuotesActions } from './actions/quotes';
import { QuoteActions } from './actions/quote';

declare let __PRODUCTION__: any;

if (__PRODUCTION__) {
  enableProdMode();
} else {
  require('zone.js/dist/long-stack-trace-zone');
}

bootstrap(QtApp, [
  NgRedux,
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, { useValue: '/' }),
  ServerService,
  AuthService,
  SessionActions,
  QuotesService,
  QuotesActions,
  QuoteActions,
]);
