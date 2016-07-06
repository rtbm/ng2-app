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
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'qt-user-change-password-form',
  template: require('./user-change-password-form.component.html'),
  styles: [require('./user-change-password-form.component.less')],
  directives: [ROUTER_DIRECTIVES, XFormComponent, XLabelComponent, XButtonComponent,
    XFormInputComponent, XFormGroupComponent, XFormActionsComponent, XFormMessageComponent, XFormContentComponent],
})
export class QtUserChangePasswordFormComponent {
  @Output() private onSubmit = new EventEmitter();

  private form: FormGroup;
  private email: FormControl;
  private token: FormControl;
  private password: FormControl;
  private password_confirm: FormControl;

  constructor(private builder: FormBuilder,
              private r: ActivatedRoute) {
    this.email = new FormControl('', Validators.required);
    this.token = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.password_confirm = new FormControl('', Validators.required);

    this.form = this.builder.group({
      password: this.password,
      password_confirm: this.password_confirm,
      token: this.token,
    });

    r.params.subscribe((params: any) => {
      this.token.updateValue(params.token);
    });
  }

  handleSubmit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }
}
