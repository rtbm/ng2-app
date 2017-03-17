import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { UserActions } from '../../../actions';

@Component({
  selector: 'qt-user-change-password-page',
  template: require('./user-change-password-page.component.html'),
  styles: [require('./user-change-password-page.component.scss')],
})
export class QtUserChangePasswordPageComponent {
  @select(['user', 'changePassword', 'isSuccess']) isChangePasswordSuccess$: Observable<boolean>;
  @select(['user', 'changePassword', 'isError']) isChangePasswordError$: Observable<boolean>;
  @select(['user', 'changePassword', 'errorCode']) changePasswordErrorCode$: Observable<boolean>;

  constructor(private userActions: UserActions,
              private title: Title) {

    title.setTitle('Change password | Quotter');
  }
}
