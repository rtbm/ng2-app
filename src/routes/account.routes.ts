import {
  QtAccountPageComponent,
  QtAccountDashboardPageComponent,
  QtAccountUsersPageComponent,
  QtAccountCirclesPageComponent,
} from '../containers';

export const ACCOUNT_ROUTES = [{
  path: 'account',
  component: QtAccountPageComponent,
  children: [{
    path: 'dashboard',
    component: QtAccountDashboardPageComponent,
  }, {
    path: 'users',
    component: QtAccountUsersPageComponent,
  }, {
    path: 'circles',
    component: QtAccountCirclesPageComponent,
  }],
}];
