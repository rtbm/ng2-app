require('./app.less');

import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';
import { NgRedux } from 'ng2-redux';
import rootReducer, { IAppState } from './reducers';
import { middlewares } from './state/middlewares';
import { enhancers } from './state/enhancers';
import { QtHomePageComponent } from './containers/home';
import { QtUserPageComponent } from './containers/user';
import { QtAccountPageComponent } from './containers/account';

@Component({
  selector: 'qt-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [require('./app.less')],
  encapsulation: ViewEncapsulation.None,
})

@Routes([{
  path: '/',
  component: QtHomePageComponent,
}, {
  path: '/account',
  component: QtAccountPageComponent,
}, {
  path: '/user',
  component: QtUserPageComponent,
}])

export class QtApp {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private router: Router
  ) {
    ngRedux.configureStore(rootReducer, {}, middlewares, enhancers);
  }
}
