import { Component, OnDestroy } from '@angular/core';
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
import { UserActions } from '../../../actions';
import { select } from 'ng2-redux';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'qt-user-signup-form',
  template: require('./user-signup-form.component.html'),
  directives: [ROUTER_DIRECTIVES, XFormComponent, XLabelComponent, XButtonComponent,
    XFormInputComponent, XFormGroupComponent, XFormActionsComponent, XFormMessageComponent, XFormContentComponent],
})
export class QtUserSignupFormComponent implements OnDestroy {
  @select(state => state.user.getIn(['signup', 'errorCode'])) private errorCode$;

  private form: FormGroup;
  private email: FormControl;
  private password: FormControl;
  private password_confirm: FormControl;

  constructor(private builder: FormBuilder,
              private userActions: UserActions) {
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
      this.userActions.signup(this.form.value);
    }
  }

  ngOnDestroy() {
    this.errorCode$.unsubscribe();
  }
}
