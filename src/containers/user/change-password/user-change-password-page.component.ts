import { Component } from '@angular/core';
import { QtUserChangePasswordFormComponent } from './user-change-password-form.component';
import { XWrapperComponent, XBoxHeaderComponent, XBoxContentComponent, XBoxComponent } from '../../../components';

@Component({
  selector: 'qt-user-reset-password-page',
  template: require('./user-change-password-page.component.html'),
  styles: [require('./user-change-password-page.component.less')],
  directives: [XWrapperComponent, QtUserChangePasswordFormComponent, XBoxComponent, XBoxHeaderComponent,
    XBoxContentComponent],
})
export class QtUserChangePasswordPageComponent {}
