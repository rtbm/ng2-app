import { Component, OnDestroy } from '@angular/core';
import {
  XFormComponent,
  XFormInputComponent,
  XFormGroupComponent,
  XFormActionsComponent,
  XFormMessageComponent
} from '../../../components/form';
import { XLabelComponent } from '../../../components/label';
import { XButtonComponent } from '../../../components/button';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserActions } from '../../../actions/user';
import { select } from 'ng2-redux/lib/index';

@Component({
  selector: 'qt-user-reset-password-form',
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, XFormComponent, XLabelComponent, XButtonComponent,
    XFormInputComponent, XFormGroupComponent, XFormActionsComponent, XFormMessageComponent],
  template: require('./user-reset-password-form.component.html'),
  styles: [require('./user-reset-password-form.component.less')],
})
export class QtUserResetPasswordFormComponent implements OnDestroy {
  @select(state => state.user.getIn(['resetPasswordForm', 'errorCode'])) private errorCode$;

  private form: ControlGroup;
  private email: Control;

  constructor(private builder: FormBuilder,
              private userActions: UserActions) {
    this.email = new Control('', Validators.required);

    this.form = this.builder.group({
      email: this.email,
    });
  }

  handleSubmit() {
    if (this.form.valid) {
      this.userActions.resetPassword(this.form.value);
    }
  }

  ngOnDestroy() {
    this.errorCode$.unsubscribe();
  }
}
