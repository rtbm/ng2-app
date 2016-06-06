import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';
import { NgRedux } from 'ng2-redux';
import rootReducer, { IAppState } from './reducers';
import { middlewares } from './state/middlewares';
import { enhancers } from './state/enhancers';
import { XHomePageComponent } from './containers/home-page';
import { XArticlesPageComponent } from './containers/articles-page';
import { XUserPageComponent } from './containers/user-page';

@Component({
  selector: 'x-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <router-outlet></router-outlet>
  `,
  encapsulation: ViewEncapsulation.None,
})

@Routes([{
  path: '/',
  component: XHomePageComponent,
}, {
  path: '/articles',
  component: XArticlesPageComponent,
}, {
  path: '/user',
  component: XUserPageComponent,
}])

export class XApp {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private router: Router
  ) {
    ngRedux.configureStore(rootReducer, {}, middlewares, enhancers);
  }
}
