import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { UserActions } from '../../../actions';
import { XWrapperComponent, XBoxHeaderComponent, XBoxContentComponent, XBoxComponent } from '../../../components';
import { QtUserChangePasswordFormComponent } from '../change-password-form';

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

  constructor(private userActions: UserActions,
              private title: Title) {

    title.setTitle('Change password | Quotter');
  }
}
