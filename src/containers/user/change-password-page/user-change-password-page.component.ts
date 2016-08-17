import { Component } from '@angular/core';
import { QtUserChangePasswordFormComponent } from '../change-password-form';
import { XWrapperComponent, XBoxHeaderComponent, XBoxContentComponent, XBoxComponent } from '../../../components';
import { UserActions } from '../../../actions';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';

@Component({
  selector: 'qt-user-change-password-page',
  template: require('./user-change-password-page.component.html'),
  styles: [require('./user-change-password-page.component.scss')],
  directives: [XWrapperComponent, QtUserChangePasswordFormComponent, XBoxComponent, XBoxHeaderComponent,
    XBoxContentComponent],
})
export class QtUserChangePasswordPageComponent {
  @select(['user', 'changePassword', 'isSuccess']) isChangePasswordSuccess$: Observable<boolean>;
  @select(['user', 'changePassword', 'isError']) isChangePasswordError$: Observable<boolean>;

  constructor(private userActions: UserActions) {
  }
}
