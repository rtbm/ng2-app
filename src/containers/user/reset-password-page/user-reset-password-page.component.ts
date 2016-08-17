import { Component } from '@angular/core';
import { QtUserResetPasswordFormComponent } from '../reset-password-form';
import {
  XWrapperComponent,
  XBoxHeaderComponent,
  XBoxContentComponent,
  XBoxComponent,
  XFormMessageComponent,
} from '../../../components';
import { UserActions } from '../../../actions';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';

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

  constructor(private userActions: UserActions) {
  }
}
