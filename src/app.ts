import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { NgRedux } from 'ng2-redux';
import rootReducer, { IAppState } from './reducers';
import { middlewares } from './state/middlewares';
import { enhancers } from './state/enhancers';
import { XHeaderComponent } from './components/organisms/header';
import { XAsideComponent } from './components/organisms/aside';
import { XHomePageComponent } from './components/pages/home-page';
import { XArticlesPageComponent } from './components/pages/articles-page';
import { XUserPageComponent } from './components/pages/user-page';

@Component({
  selector: 'x-app',
  directives: [ROUTER_DIRECTIVES, XHeaderComponent, XAsideComponent],
  template: `
    <x-header></x-header>
    <x-aside></x-aside>
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
  constructor(private ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, {}, middlewares, enhancers);
  }
}
