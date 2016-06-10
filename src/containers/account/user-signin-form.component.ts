import { Component, Output, EventEmitter } from '@angular/core';
import {
  XFormComponent,
  XFormInputComponent,
  XFormActionsComponent,
  XFormMessageComponent
} from '../../components/form';
import { XLabelComponent } from '../../components/label';
import { XButtonComponent } from '../../components/button';
import { XFormGroupComponent } from '../../components/form/form-group.component';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators } from '@angular/common';

@Component({
  selector: 'x-user-signin-form',
  directives: [FORM_DIRECTIVES, XFormComponent, XLabelComponent, XButtonComponent, XFormInputComponent,
    XFormGroupComponent, XFormActionsComponent, XFormMessageComponent],
  template: require('./user-signin-form.component.html'),
})
export class XUserSigninFormComponent {
  @Output() onSubmit = new EventEmitter<Event>();

  private form: ControlGroup;
  private email: Control;
  private password: Control;

  constructor(private builder: FormBuilder) {
    this.email = new Control('', Validators.required);
    this.password = new Control('', Validators.required);

    this.form = this.builder.group({
      email: this.email,
      password: this.password
    });
  }

  handleSubmit() {
    this.onSubmit.emit(this.form.value);
  }
}
