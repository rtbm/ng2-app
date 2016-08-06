import { Component, Output, EventEmitter } from '@angular/core';
import {
  XFormComponent,
  XFormInputComponent,
  XFormGroupComponent,
  XFormActionsComponent,
  XFormMessageComponent,
  XLabelComponent,
  XButtonComponent,
  XFormContentComponent,
  XFormErrorComponent,
} from '../../../components';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { EmailValidator } from '../../../validators/email.validator';

@Component({
  selector: 'qt-user-reset-password-form',
  template: require('./user-reset-password-form.component.html'),
  styles: [require('./user-reset-password-form.component.scss')],
  directives: [ROUTER_DIRECTIVES, XFormComponent, XLabelComponent, XButtonComponent, XFormInputComponent,
    XFormGroupComponent, XFormActionsComponent, XFormMessageComponent, XFormContentComponent, XFormErrorComponent],
})
export class QtUserResetPasswordFormComponent {
  @Output() private onSubmit = new EventEmitter();

  private form: FormGroup;
  private email: FormControl;
  private isSubmitted: boolean;

  constructor(private builder: FormBuilder) {
    this.email = new FormControl('', EmailValidator.validate);

    this.form = this.builder.group({
      email: this.email,
    });
  }

  handleSubmit() {
    this.isSubmitted = true;

    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }
}
