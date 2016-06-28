import { QtAccountPageComponent } from '../containers/account';
import { QtDashboardPageComponent } from '../containers/dashboard';

export const ACCOUNT_ROUTES = [{
  path: 'account',
  component: QtAccountPageComponent,
  children: [{
    path: 'dashboard',
    component: QtDashboardPageComponent,
  }],
}];
