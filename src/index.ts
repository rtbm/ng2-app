import 'reflect-metadata';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'ts-helpers';

import {enableProdMode, provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {APP_BASE_HREF} from '@angular/common/index';
import {NgRedux} from 'ng2-redux';

import {ServerService} from './services/server';
import {AuthService} from './services/auth';
import {SearchService} from './services/search';
import {SessionActions} from './actions/session';

import {XApp} from './app';

declare let __PRODUCTION__: any;

if (__PRODUCTION__) {
    enableProdMode();
} else {
    require('zone.js/dist/long-stack-trace-zone');
}

bootstrap(XApp, [
    NgRedux,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, { useValue: '/' }),
    ServerService,
    AuthService,
    SearchService,
    SessionActions
]);
