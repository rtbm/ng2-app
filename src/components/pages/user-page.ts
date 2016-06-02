import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { XUserSigninPageComponent } from './user/signin-page';
import { XUserSignupPageComponent } from './user/signup-page';

@Component({
  selector: 'x-user-page',
  directives: [ROUTER_DIRECTIVES],
  template: `
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
