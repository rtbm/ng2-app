import 'reflect-metadata';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'ts-helpers';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { QtAppModule } from './app.module';

const WebFont = require('webfontloader');

WebFont.load({
  google: {
    families: [
      'Roboto:400,500,700',
      'Playfair+Display:400,700',
      'Material+Icons',
    ],
  },
});

if (__PRODUCTION__) {
  enableProdMode();
} else {
  require('zone.js/dist/long-stack-trace-zone');
}

platformBrowserDynamic().bootstrapModule(QtAppModule);
