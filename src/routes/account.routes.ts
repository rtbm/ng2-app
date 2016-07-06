import {
  QtAccountPageComponent,
  QtAccountQuotesPageComponent,
  QtAccountUsersPageComponent,
  QtAccountCirclesPageComponent,
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
    path: 'circles',
    component: QtAccountCirclesPageComponent,
  }, {
    path: 'profile',
    component: QtAccountProfilePageComponent,
  }],
}];
