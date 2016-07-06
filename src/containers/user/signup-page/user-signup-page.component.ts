import { Component } from '@angular/core';
import { QtUserSignupFormComponent } from '../signup-form';
import {
  XWrapperComponent,
  XFormGroupComponent,
  XBoxHeaderComponent,
  XBoxContentComponent,
  XBoxComponent,
} from '../../../components';
import { AsyncPipe } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserActions } from '../../../actions';

@Component({
  selector: 'qt-user-signup-page',
  template: require('./user-signup-page.component.html'),
  styles: [require('./user-signup-page.component.less')],
  directives: [ROUTER_DIRECTIVES, QtUserSignupFormComponent, XWrapperComponent, XFormGroupComponent, XBoxComponent,
    XBoxHeaderComponent, XBoxContentComponent],
  pipes: [AsyncPipe],
})

export class QtUserSignupPageComponent {
  constructor(private userActions: UserActions) {
  }
}
