import { Component, OnDestroy } from '@angular/core';
import {
  XFormComponent,
  XFormInputComponent,
  XFormGroupComponent,
  XFormActionsComponent,
  XFormMessageComponent,
  XFormErrorComponent
} from '../../components/form';
import { XLabelComponent } from '../../components/label';
import { XButtonComponent } from '../../components/button';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserActions } from '../../actions/user';

@Component({
  selector: 'qt-user-reset-password-form',
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, XFormComponent, XLabelComponent, XButtonComponent,
    XFormInputComponent, XFormGroupComponent, XFormActionsComponent, XFormMessageComponent, XFormErrorComponent],
  template: require('./user-reset-password-form.component.html'),
  styles: [require('./user-reset-password-form.component.less')],
})
export class QtUserResetPasswordFormComponent implements OnDestroy {
  private form: ControlGroup;
  private email: Control;
  private password: Control;
  private password_confirm: Control;
  private submitted: boolean = false;

  constructor(private builder: FormBuilder,
              private userActions: UserActions) {
    this.email = new Control('', Validators.required);
    this.password = new Control('', Validators.required);
    this.password_confirm = new Control('', Validators.required);

    this.form = this.builder.group({
      email: this.email,
    });
  }

  handleSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.userActions.resetPassword(this.form.value);
    }
  }

  ngOnDestroy() {
  }
}