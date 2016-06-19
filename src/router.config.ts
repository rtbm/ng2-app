import { QtDashboardPageComponent } from './containers/dashboard';
import { QtUserSigninPageComponent, QtUserSignupPageComponent, QtUserPageComponent } from './containers/user';
import { QtAccountPageComponent } from './containers/account';
import { QtHomePageComponent } from './containers/home';
import { QtUserResetPasswordPageComponent } from './containers/user/user-reset-password-page.component';

export const ROUTER_CONFIG = [{
  path: '',
  component: QtHomePageComponent,
}, {
  path: 'account',
  component: QtAccountPageComponent,
  children: [{
    path: 'dashboard',
    component: QtDashboardPageComponent,
  }]
}, {
  path: 'user',
  component: QtUserPageComponent,
  children: [{
    path: 'signin',
    component: QtUserSigninPageComponent,
  }, {
    path: 'signup',
    component: QtUserSignupPageComponent,
  }, {
    path: 'reset-password',
    component: QtUserResetPasswordPageComponent,
  }]
}];
