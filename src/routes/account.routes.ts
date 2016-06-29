import {
  QtAccountPageComponent,
  QtAccountDashboardPageComponent,
  QtAccountUsersPageComponent
} from '../containers';

export const ACCOUNT_ROUTES = [{
  path: 'account',
  component: QtAccountPageComponent,
  children: [{
    path: 'dashboard',
    component: QtAccountDashboardPageComponent,
  }, {
    path: 'users',
    component: QtAccountUsersPageComponent
  }],
}];
