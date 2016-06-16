require('./app.less');

import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { NgRedux } from 'ng2-redux';
import rootReducer, { IAppState } from './reducers';
import { middlewares } from './state/middlewares';
import { enhancers } from './state/enhancers';

@Component({
  selector: 'qt-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [require('./app.less')],
  encapsulation: ViewEncapsulation.None,
})

export class QtApp {
  constructor(private ngRedux: NgRedux<IAppState>,
              private router: Router) {
    ngRedux.configureStore(rootReducer, {}, middlewares, enhancers);
  }
}
