import { Component, Output, EventEmitter } from '@angular/core';
import {
  XFormComponent,
  XFormInputComponent,
  XFormGroupComponent,
  XFormActionsComponent,
  XFormMessageComponent
} from '../../components/form';
import { XLabelComponent } from '../../components/label';
import { XButtonComponent } from '../../components/button';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators } from '@angular/common';

@Component({
  selector: 'x-user-signup-form',
  directives: [FORM_DIRECTIVES, XFormComponent, XLabelComponent, XButtonComponent, XFormInputComponent,
    XFormGroupComponent, XFormActionsComponent, XFormMessageComponent],
  template: require('./user-signup-form.component.html'),
})
export class XUserSignupFormComponent {
  @Output() onSubmit = new EventEmitter<Event>();

  private form: ControlGroup;
  private email: Control;
  private password: Control;
  private password_confirm: Control;

  constructor(private builder: FormBuilder) {
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
    this.onSubmit.emit(this.form.value);
  }
}
