import {
  QtAccountPageComponent,
  QtAccountQuotesPageComponent,
  QtAccountUsersPageComponent,
  QtAccountProfileEditPageComponent,
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
    path: 'profile/edit',
    component: QtAccountProfileEditPageComponent,
  }, {
    path: 'profile/:_id',
    component: QtAccountProfilePageComponent,
  }],
}];
