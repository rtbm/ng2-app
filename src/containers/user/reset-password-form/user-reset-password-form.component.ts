import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { EmailValidator } from '../../../validators/email.validator';

@Component({
  selector: 'qt-user-reset-password-form',
  template: require('./user-reset-password-form.component.html'),
  styles: [require('./user-reset-password-form.component.scss')],
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
