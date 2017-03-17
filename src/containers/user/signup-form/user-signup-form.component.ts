import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { select } from '@angular-redux/store';
import { EmailValidator } from '../../../validators/email.validator';

@Component({
  selector: 'qt-user-signup-form',
  template: require('./user-signup-form.component.html'),
  styles: [require('./user-signup-form.component.scss')],
})
export class QtUserSignupFormComponent implements OnDestroy {
  @select(state => state.user.getIn(['signup', 'errorCode'])) private errorCode$;
  @Output() private onSubmit = new EventEmitter();

  private form: FormGroup;
  private username: FormControl;
  private first_name: FormControl;
  private last_name: FormControl;
  private email: FormControl;
  private password: FormControl;
  private password_confirm: FormControl;
  private isSubmitted: boolean;

  constructor(private builder: FormBuilder) {
    this.username = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.email = new FormControl('', EmailValidator.validate);
    this.first_name = new FormControl('');
    this.last_name = new FormControl('');
    this.password = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.password_confirm = new FormControl('', Validators.required);

    this.form = this.builder.group({
      username: this.username,
      email: this.email,
      first_name: this.first_name,
      last_name: this.last_name,
      password: this.password,
      password_confirm: this.password_confirm,
    });
  }

  handleSubmit() {
    this.isSubmitted = true;

    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }

  ngOnDestroy = () => this.errorCode$.unsubscribe();
}
