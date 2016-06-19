import { Component } from '@angular/core';
import { QtUserResetPasswordFormComponent } from './user-reset-password-form.component';
import { XWrapperComponent } from '../../../components/wrapper';

@Component({
  selector: 'qt-user-reset-password-page',
  directives: [XWrapperComponent, QtUserResetPasswordFormComponent],
  template: require('./user-reset-password-page.component.html'),
  styles: [require('./user-reset-password-page.component.less')],
})
export class QtUserResetPasswordPageComponent {}
