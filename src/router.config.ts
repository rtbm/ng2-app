import { QtDashboardPageComponent } from './containers/dashboard';
import { QtUserSigninPageComponent } from './containers/user';
import { QtUserSignupPageComponent } from './containers/user';
import { QtUserPageComponent } from './containers/user';
import { QtAccountPageComponent } from './containers/account';
import { QtHomePageComponent } from './containers/home';

export const ROUTER_CONFIG = [{
  path: '/',
  component: QtHomePageComponent,
}, {
  path: '/account',
  component: QtAccountPageComponent,
  children: [{
    path: '/dashboard',
    component: QtDashboardPageComponent,
  }]
}, {
  path: '/user',
  component: QtUserPageComponent,
  children: [{
    component: QtUserSigninPageComponent,
    path: '/signin',
  }, {
    component: QtUserSignupPageComponent,
    path: '/signup',
  }]
}];
