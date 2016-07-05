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
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserActions } from '../../../actions';
import { select } from 'ng2-redux';

@Component({
  selector: 'qt-user-reset-password-form',
  template: require('./user-reset-password-form.component.html'),
  styles: [require('./user-reset-password-form.component.less')],
  directives: [ROUTER_DIRECTIVES, XFormComponent, XLabelComponent, XButtonComponent,
    XFormInputComponent, XFormGroupComponent, XFormActionsComponent, XFormMessageComponent, XFormContentComponent],
})
export class QtUserResetPasswordFormComponent implements OnDestroy {
  @select(state => state.user.getIn(['resetPassword', 'errorCode'])) private errorCode$;

  private form: FormGroup;
  private email: FormControl;

  constructor(private builder: FormBuilder,
              private userActions: UserActions) {
    this.email = new FormControl('', Validators.required);

    this.form = this.builder.group({
      email: this.email,
    });
  }

  handleSubmit() {
    if (this.form.valid) {
      this.userActions.resetPassword(this.form.value);
    }
  }

  ngOnDestroy() {
    this.errorCode$.unsubscribe();
  }
}
