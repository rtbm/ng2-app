import { Component } from '@angular/core';
import {
  XFormComponent,
  XFormInputComponent,
  XFormActionsComponent,
  XFormMessageComponent,
  XFormErrorComponent,
  XFormGroupComponent
} from '../../components/form';
import { XLabelComponent } from '../../components/label';
import { XButtonComponent } from '../../components/button';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators, AsyncPipe } from '@angular/common';
import { SessionActions } from '../../actions/session';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';

@Component({
  selector: 'qt-user-signin-form',
  pipes: [AsyncPipe],
  directives: [FORM_DIRECTIVES, XFormComponent, XLabelComponent, XButtonComponent, XFormInputComponent,
    XFormGroupComponent, XFormActionsComponent, XFormMessageComponent, XFormErrorComponent],
  template: require('./user-signin-form.component.html'),
})
export class QtUserSigninFormComponent {
  @select(state => state.session.get('status')) private status$: Observable<number>;

  private form: ControlGroup;
  private email: Control;
  private password: Control;
  private submitted: boolean = false;

  constructor(private builder: FormBuilder,
              private sessionActions: SessionActions) {
    this.email = new Control('', Validators.required);
    this.password = new Control('', Validators.required);

    this.form = this.builder.group({
      email: this.email,
      password: this.password
    });
  }

  handleSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.sessionActions.signin(this.form.value);
    }
  }
}
