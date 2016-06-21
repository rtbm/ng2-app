import { Component } from '@angular/core';
import { QtUserResetPasswordFormComponent } from './user-reset-password-form.component';
import { XWrapperComponent } from '../../../components/wrapper';
import { XBoxHeaderComponent } from '../../../components/box';
import { XBoxContentComponent } from '../../../components/box';
import { XBoxComponent } from '../../../components/box';

@Component({
  selector: 'qt-user-reset-password-page',
  directives: [XWrapperComponent, QtUserResetPasswordFormComponent, XBoxComponent, XBoxHeaderComponent,
    XBoxContentComponent],
  template: require('./user-reset-password-page.component.html'),
  styles: [require('./user-reset-password-page.component.less')],
})
export class QtUserResetPasswordPageComponent {}
