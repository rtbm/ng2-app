import { Component } from '@angular/core';
import { QtUserChangePasswordFormComponent } from '../change-password-form';
import { XWrapperComponent, XBoxHeaderComponent, XBoxContentComponent, XBoxComponent } from '../../../components';
import { UserActions } from '../../../actions';

@Component({
  selector: 'qt-user-change-password-page',
  template: require('./user-change-password-page.component.html'),
  styles: [require('./user-change-password-page.component.scss')],
  directives: [XWrapperComponent, QtUserChangePasswordFormComponent, XBoxComponent, XBoxHeaderComponent,
    XBoxContentComponent],
})
export class QtUserChangePasswordPageComponent {
  constructor(private userActions: UserActions) {
  }
}
