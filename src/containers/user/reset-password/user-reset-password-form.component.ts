import { Component, OnDestroy } from '@angular/core';
import {
  XFormComponent,
  XFormInputComponent,
  XFormGroupComponent,
  XFormActionsComponent,
  XFormMessageComponent,
  XLabelComponent,
  XButtonComponent
} from '../../../components';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserActions } from '../../../actions';
import { select } from 'ng2-redux';

@Component({
  selector: 'qt-user-reset-password-form',
  template: require('./user-reset-password-form.component.html'),
  styles: [require('./user-reset-password-form.component.less')],
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, XFormComponent, XLabelComponent, XButtonComponent,
    XFormInputComponent, XFormGroupComponent, XFormActionsComponent, XFormMessageComponent],
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
