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
} from '../../../components';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'qt-user-reset-password-form',
  template: require('./user-reset-password-form.component.html'),
  styles: [require('./user-reset-password-form.component.scss')],
  directives: [ROUTER_DIRECTIVES, XFormComponent, XLabelComponent, XButtonComponent,
    XFormInputComponent, XFormGroupComponent, XFormActionsComponent, XFormMessageComponent, XFormContentComponent],
})
export class QtUserResetPasswordFormComponent {
  @Output() private onSubmit = new EventEmitter();

  private form: FormGroup;
  private email: FormControl;

  constructor(private builder: FormBuilder) {
    this.email = new FormControl('', Validators.required);

    this.form = this.builder.group({
      email: this.email,
    });
  }

  handleSubmit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }
}
