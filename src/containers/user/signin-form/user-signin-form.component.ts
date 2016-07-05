import { Component, OnDestroy } from '@angular/core';
import {
  XFormComponent,
  XFormInputComponent,
  XFormActionsComponent,
  XFormMessageComponent,
  XFormGroupComponent,
  XLabelComponent,
  XButtonComponent,
  XFormContentComponent,
} from '../../../components';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AsyncPipe, NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import { UserActions } from '../../../actions';
import { select } from 'ng2-redux';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'qt-user-signin-form',
  template: require('./user-signin-form.component.html'),
  directives: [ROUTER_DIRECTIVES, NgSwitch, NgSwitchCase, NgSwitchDefault, XFormComponent,
    XLabelComponent, XButtonComponent, XFormInputComponent, XFormGroupComponent, XFormActionsComponent,
    XFormMessageComponent, XFormContentComponent],
  pipes: [AsyncPipe],
})
export class QtUserSigninFormComponent implements OnDestroy {
  @select(state => state.user.getIn(['signin', 'errorCode'])) private errorCode$;

  private form: FormGroup;
  private email: FormControl;
  private password: FormControl;

  constructor(private builder: FormBuilder,
              private userActions: UserActions) {
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.form = this.builder.group({
      email: this.email,
      password: this.password,
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
