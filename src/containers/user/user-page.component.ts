import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { QtUserSigninPageComponent } from './user-signin-page.component';
import { QtUserSignupPageComponent } from './user-signup-page.component';
import { QtHeaderComponent } from '../header';

@Component({
  selector: 'x-user-page',
  directives: [ROUTER_DIRECTIVES, QtHeaderComponent],
  template: require('./user-page.component.html'),
})

@Routes([{
  component: QtUserSigninPageComponent,
  path: '/signin'
}, {
  component: QtUserSignupPageComponent,
  path: '/signup'
}])

export class QtUserPageComponent {
}
