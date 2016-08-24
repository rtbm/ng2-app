import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserActions } from '../../../actions';
import { Observable } from 'rxjs';
import { select } from 'ng2-redux';
import { QtUserSignupFormComponent } from '../signup-form';
import {
  XWrapperComponent,
  XFormGroupComponent,
  XBoxHeaderComponent,
  XBoxContentComponent,
  XBoxComponent,
  XFormMessageComponent,
} from '../../../components';

@Component({
  selector: 'qt-user-signup-page',
  template: require('./user-signup-page.component.html'),
  styles: [require('./user-signup-page.component.scss')],
  directives: [ROUTER_DIRECTIVES, QtUserSignupFormComponent, XWrapperComponent, XFormGroupComponent, XBoxComponent,
    XBoxHeaderComponent, XBoxContentComponent, XFormMessageComponent],
  pipes: [AsyncPipe],
})

export class QtUserSignupPageComponent {
  @select(['user', 'signup', 'isError']) isSignupError$: Observable<boolean>;
  @select(['user', 'signup', 'errorCode']) signupErrorCode$: Observable<number>;

  constructor(private userActions: UserActions,
              private title: Title) {

    title.setTitle('Sign up | Quotter');
  }
}
