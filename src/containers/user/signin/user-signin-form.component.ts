import { Component, OnDestroy } from '@angular/core';
import {
  XFormComponent,
  XFormInputComponent,
  XFormActionsComponent,
  XFormMessageComponent,
  XFormGroupComponent,
  XLabelComponent,
  XButtonComponent
} from '../../../components';
import {
  FORM_DIRECTIVES,
  FormBuilder,
  ControlGroup,
  Control,
  Validators,
  AsyncPipe,
  NgSwitch,
  NgSwitchDefault,
  NgSwitchCase
} from '@angular/common';
import { UserActions } from '../../../actions';
import { select } from 'ng2-redux';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'qt-user-signin-form',
  template: require('./user-signin-form.component.html'),
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, NgSwitch, NgSwitchCase, NgSwitchDefault, XFormComponent,
    XLabelComponent, XButtonComponent, XFormInputComponent, XFormGroupComponent, XFormActionsComponent,
    XFormMessageComponent],
  pipes: [AsyncPipe],
})
export class QtUserSigninFormComponent implements OnDestroy {
  @select(state => state.user.getIn(['signinForm', 'errorCode'])) private errorCode$;

  private form: ControlGroup;
  private email: Control;
  private password: Control;

  constructor(private builder: FormBuilder,
              private userActions: UserActions) {
    this.email = new Control('', Validators.required);
    this.password = new Control('', Validators.required);

    this.form = this.builder.group({
      email: this.email,
      password: this.password
    });
  }

  handleSubmit() {
    if (this.form.valid) {
      this.userActions.signin(this.form.value);
    }
  }

  ngOnDestroy() {
    this.errorCode$.unsubscribe();
  }
}
