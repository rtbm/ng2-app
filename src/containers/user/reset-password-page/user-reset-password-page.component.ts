import { Component } from '@angular/core';
import { QtUserResetPasswordFormComponent } from '../reset-password-form';
import {
  XWrapperComponent,
  XBoxHeaderComponent,
  XBoxContentComponent,
  XBoxComponent,
  XFormMessageComponent
} from '../../../components';
import { UserActions } from '../../../actions';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';

@Component({
  selector: 'qt-user-reset-password-page',
  template: require('./user-reset-password-page.component.html'),
  styles: [require('./user-reset-password-page.component.scss')],
  directives: [XWrapperComponent, QtUserResetPasswordFormComponent, XBoxComponent, XBoxHeaderComponent,
    XBoxContentComponent, XFormMessageComponent],
})
export class QtUserResetPasswordPageComponent {
  @select(state => state.user) private user$;

  private isResetPasswordError$: Observable<boolean>;
  private isResetPasswordSuccess$: Observable<boolean>;

  constructor(private userActions: UserActions) {
    this.isResetPasswordError$ = this.user$.map(s => s.getIn(['resetPassword', 'isError']));
    this.isResetPasswordSuccess$ = this.user$.map(s => s.getIn(['resetPassword', 'isSuccess']));
  }
}
