import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import {
  XFormComponent,
  XFormInputComponent,
  XFormGroupComponent,
  XFormActionsComponent,
  XLabelComponent,
  XButtonComponent,
  XFormContentComponent,
} from '../../../components';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { select } from 'ng2-redux';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'qt-user-signup-form',
  template: require('./user-signup-form.component.html'),
  directives: [ROUTER_DIRECTIVES, XFormComponent, XLabelComponent, XButtonComponent,
    XFormInputComponent, XFormGroupComponent, XFormActionsComponent, XFormContentComponent],
})
export class QtUserSignupFormComponent implements OnDestroy {
  @select(state => state.user.getIn(['signup', 'errorCode'])) private errorCode$;
  @Output() private onSubmit = new EventEmitter();

  private form: FormGroup;
  private email: FormControl;
  private password: FormControl;
  private password_confirm: FormControl;

  constructor(private builder: FormBuilder) {
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.password_confirm = new FormControl('', Validators.required);

    this.form = this.builder.group({
      email: this.email,
      password: this.password,
      password_confirm: this.password_confirm,
    });
  }

  handleSubmit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }

  ngOnDestroy() {
    this.errorCode$.unsubscribe();
  }
}
