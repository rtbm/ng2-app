import { Component } from '@angular/core';
import { QtUserChangePasswordFormComponent } from './user-change-password-form.component';
import { XWrapperComponent } from '../../../components/wrapper';
import { XBoxHeaderComponent } from '../../../components/box';
import { XBoxContentComponent } from '../../../components/box';
import { XBoxComponent } from '../../../components/box';

@Component({
  selector: 'qt-user-reset-password-page',
  directives: [XWrapperComponent, QtUserChangePasswordFormComponent, XBoxComponent, XBoxHeaderComponent,
    XBoxContentComponent],
  template: require('./user-change-password-page.component.html'),
  styles: [require('./user-change-password-page.component.less')],
})
export class QtUserChangePasswordPageComponent {}
