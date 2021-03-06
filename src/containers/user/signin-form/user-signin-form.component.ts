import { Component, Output, EventEmitter } from '@angular/core';
import { EmailValidator } from '../../../validators';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'qt-user-signin-form',
  template: require('./user-signin-form.component.html'),
  styles: [require('./user-signin-form.component.scss')],
})
export class QtUserSigninFormComponent {
  @Output() private onSubmit = new EventEmitter();

  private form: FormGroup;
  private login: FormControl;
  private password: FormControl;
  private isSubmitted: boolean;

  constructor(private builder: FormBuilder) {
    this.login = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.form = this.builder.group({
      login: this.login,
      password: this.password,
    });
  }

  handleSubmit() {
    this.isSubmitted = true;

    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }
}
