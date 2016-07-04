import { Component } from '@angular/core';
import { QtUserSigninFormComponent } from '../signin-form';
import { AsyncPipe } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {
  XWrapperComponent,
  XFormMessageComponent,
  XBoxContentComponent,
  XBoxHeaderComponent,
  XBoxComponent,
} from '../../../components';

@Component({
  selector: 'qt-user-signin-page',
  template: require('./user-signin-page.component.html'),
  styles: [require('./user-signin-page.component.less')],
  directives: [ROUTER_DIRECTIVES, QtUserSigninFormComponent, XWrapperComponent, XFormMessageComponent,
    QtUserSigninFormComponent, XBoxComponent, XBoxHeaderComponent, XBoxContentComponent],
  pipes: [AsyncPipe],
})

export class QtUserSigninPageComponent {}
