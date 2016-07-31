import {
  QtAccountPageComponent,
  QtAccountQuotesPageComponent,
  QtAccountUsersPageComponent,
  QtAccountProfilePageComponent,
} from '../containers';

export const ACCOUNT_ROUTES = [{
  path: 'account',
  component: QtAccountPageComponent,
  children: [{
    path: 'quotes',
    component: QtAccountQuotesPageComponent,
  }, {
    path: 'users',
    component: QtAccountUsersPageComponent,
  }, {
    path: 'profile',
    component: QtAccountProfilePageComponent,
  }],
}];
