import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { UserActions } from '../../../actions';
import { QtUserResetPasswordFormComponent } from '../reset-password-form';
import {
  XWrapperComponent,
  XBoxHeaderComponent,
  XBoxContentComponent,
  XBoxComponent,
  XFormMessageComponent,
} from '../../../components';

@Component({
  selector: 'qt-user-reset-password-page',
  template: require('./user-reset-password-page.component.html'),
  styles: [require('./user-reset-password-page.component.scss')],
  directives: [XWrapperComponent, QtUserResetPasswordFormComponent, XBoxComponent, XBoxHeaderComponent,
    XBoxContentComponent, XFormMessageComponent],
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
