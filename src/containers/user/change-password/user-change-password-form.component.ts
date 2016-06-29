import { Component } from '@angular/core';
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
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { UserActions } from '../../../actions';

@Component({
  selector: 'qt-user-reset-password-form',
  template: require('./user-change-password-form.component.html'),
  styles: [require('./user-change-password-form.component.less')],
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, XFormComponent, XLabelComponent, XButtonComponent,
    XFormInputComponent, XFormGroupComponent, XFormActionsComponent, XFormMessageComponent],
})
export class QtUserChangePasswordFormComponent {
  private form: ControlGroup;
  private email: Control;
  private token: Control;
  private password: Control;
  private password_confirm: Control;

  constructor(private builder: FormBuilder,
              private userActions: UserActions,
              private r: ActivatedRoute) {
    this.email = new Control('', Validators.required);
    this.token = new Control('', Validators.required);
    this.password = new Control('', Validators.required);
    this.password_confirm = new Control('', Validators.required);

    this.form = this.builder.group({
      password: this.password,
      password_confirm: this.password_confirm,
      token: this.token,
    });

    r.params.subscribe((params:any) => {
      this.token.updateValue(params.token);
    });
  }

  handleSubmit() {
    if (this.form.valid) {
      this.userActions.changePassword(this.form.value);
    }
  }
}
