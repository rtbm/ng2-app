import { Component } from '@angular/core';
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
import { SessionActions } from '../../actions/session';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';

@Component({
  selector: 'qt-user-signup-form',
  directives: [FORM_DIRECTIVES, XFormComponent, XLabelComponent, XButtonComponent, XFormInputComponent,
    XFormGroupComponent, XFormActionsComponent, XFormMessageComponent, XFormErrorComponent],
  template: require('./user-signup-form.component.html'),
})
export class QtUserSignupFormComponent {
  @select(state => state.session.get('status')) private status$: Observable<number>;

  private form: ControlGroup;
  private email: Control;
  private password: Control;
  private password_confirm: Control;
  private submitted: boolean = false;

  constructor(
    private builder: FormBuilder,
    private sessionActions: SessionActions
  ) {
    this.email = new Control('', Validators.required);
    this.password = new Control('', Validators.required);
    this.password_confirm = new Control('', Validators.required);

    this.form = this.builder.group({
      email: this.email,
      password: this.password,
      password_confirm: this.password_confirm
    });
  }

  handleSubmit() {
    this.submitted = true;
    if(this.form.valid) {
      this.sessionActions.signup(this.form.value);
    }
  }
}
