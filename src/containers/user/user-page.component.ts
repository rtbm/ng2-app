import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { XUserSigninPageComponent, XUserSignupPageComponent } from './';
import { XHeaderComponent } from '../header';

@Component({
  selector: 'x-user-page',
  directives: [ROUTER_DIRECTIVES, XHeaderComponent],
  template: require('./user-page.component.html'),
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
