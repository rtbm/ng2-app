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

import { SERVICES_PROVIDERS } from './services';
import { ACTIONS_PROVIDERS } from './actions';
import { EPICS_PROVIDERS } from './epics';

import { ACCOUNT_ROUTES, HOME_ROUTES, USER_ROUTES } from './routes';
import { QtAppComponent } from './app.component';

if (__PRODUCTION__) {
  enableProdMode();
} else {
  require('zone.js/dist/long-stack-trace-zone');
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
  ...SERVICES_PROVIDERS,
  ...ACTIONS_PROVIDERS,
  ...EPICS_PROVIDERS,
]);
