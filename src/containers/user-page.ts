import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { XUserSigninPageComponent } from './user/user-signin-page';
import { XUserSignupPageComponent } from './user/user-signup-page';
import { XHeaderComponent } from '../components/header';

@Component({
  selector: 'x-user-page',
  directives: [ROUTER_DIRECTIVES, XHeaderComponent],
  template: `
    <x-header></x-header>
    <router-outlet></router-outlet>
  `,
})

@Routes([{
  component: XUserSigninPageComponent,
  path: '/signin'
}, {
  component: XUserSignupPageComponent,
  path: '/signup'
}])

export class XUserPageComponent {
}
