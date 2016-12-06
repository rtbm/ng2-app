import 'core-js/es6';
import 'core-js/es7/reflect';
import 'ts-helpers';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'rxjs/Rx';

import { TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

Error.stackTraceLimit = Infinity;

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

TestBed.configureCompiler({
  providers: [{
    provide: ComponentFixtureAutoDetect,
    useValue: true,
  }],
});

const testContext = (<{ context?: Function }> require)
  .context('./', true, /\.spec\.ts/);

testContext.keys().forEach(key => {
  if (/\.spec\.ts$/.test(key)) {
    testContext(key);
  }
});
