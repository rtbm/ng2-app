import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
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
  @Output() private onSubmit = new EventEmitter();

  private form: FormGroup;
  private email: FormControl;
  private password: FormControl;

  constructor(private builder: FormBuilder) {
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.form = this.builder.group({
      email: this.email,
      password: this.password,
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
