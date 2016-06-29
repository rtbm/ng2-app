import {
  QtUserSigninPageComponent,
  QtUserSignupPageComponent,
  QtUserPageComponent,
  QtUserResetPasswordPageComponent,
  QtUserChangePasswordPageComponent
} from '../containers';

export const USER_ROUTES = [{
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
  }, {
    path: 'change-password/:token',
    component: QtUserChangePasswordPageComponent,
  }],
}];
