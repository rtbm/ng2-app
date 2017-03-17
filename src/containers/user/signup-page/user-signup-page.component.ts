import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserActions } from '../../../actions';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';

@Component({
  selector: 'qt-user-signup-page',
  template: require('./user-signup-page.component.html'),
  styles: [require('./user-signup-page.component.scss')],
})

export class QtUserSignupPageComponent {
  @select(['user', 'signup', 'isError']) isSignupError$: Observable<boolean>;
  @select(['user', 'signup', 'errorCode']) signupErrorCode$: Observable<number>;

  constructor(private userActions: UserActions,
              private title: Title) {

    title.setTitle('Sign up | Quotter');
  }
}
