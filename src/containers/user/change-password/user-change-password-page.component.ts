import { Component } from '@angular/core';
import { QtUserChangePasswordFormComponent } from './user-change-password-form.component';
import { XWrapperComponent } from '../../../components/wrapper';

@Component({
  selector: 'qt-user-reset-password-page',
  directives: [XWrapperComponent, QtUserChangePasswordFormComponent],
  template: require('./user-change-password-page.component.html'),
  styles: [require('./user-change-password-page.component.less')],
})
export class QtUserChangePasswordPageComponent {}
