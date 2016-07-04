import { Component } from '@angular/core';
import { QtUserResetPasswordFormComponent } from '../reset-password-form';
import { XWrapperComponent, XBoxHeaderComponent, XBoxContentComponent, XBoxComponent } from '../../../components';

@Component({
  selector: 'qt-user-reset-password-page',
  template: require('./user-reset-password-page.component.html'),
  styles: [require('./user-reset-password-page.component.less')],
  directives: [XWrapperComponent, QtUserResetPasswordFormComponent, XBoxComponent, XBoxHeaderComponent,
    XBoxContentComponent],
})
export class QtUserResetPasswordPageComponent {}
