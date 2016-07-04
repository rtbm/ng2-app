import { Component } from '@angular/core';
import { QtUserChangePasswordFormComponent } from '../change-password-form';
import { XWrapperComponent, XBoxHeaderComponent, XBoxContentComponent, XBoxComponent } from '../../../components';

@Component({
  selector: 'qt-user-change-password-page',
  template: require('./user-change-password-page.component.html'),
  styles: [require('./user-change-password-page.component.less')],
  directives: [XWrapperComponent, QtUserChangePasswordFormComponent, XBoxComponent, XBoxHeaderComponent,
    XBoxContentComponent],
})
export class QtUserChangePasswordPageComponent {}
