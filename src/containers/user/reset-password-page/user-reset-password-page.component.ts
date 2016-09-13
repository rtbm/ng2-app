import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { UserActions } from '../../../actions';

@Component({
  selector: 'qt-user-reset-password-page',
  template: require('./user-reset-password-page.component.html'),
  styles: [require('./user-reset-password-page.component.scss')],
})
export class QtUserResetPasswordPageComponent {
  @select(['user', 'resetPassword', 'isSuccess']) isResetPasswordSuccess$: Observable<boolean>;
  @select(['user', 'resetPassword', 'isError']) isResetPasswordError$: Observable<boolean>;
  @select(['user', 'resetPassword', 'errorCode']) resetPasswordErrorCode$: Observable<boolean>;

  constructor(private userActions: UserActions,
              private title: Title) {

    title.setTitle('Reset password | Quotter');
  }
}
