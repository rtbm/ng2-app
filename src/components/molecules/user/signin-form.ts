import { Component, Output, EventEmitter } from '@angular/core';
import { XFormComponent } from '../../atoms/form/form';
import { XLabelComponent } from '../../atoms/form/label';
import { XButtonComponent } from '../../atoms/button/button';
import { XInputComponent } from '../../atoms/form/input';
import { XFormGroupComponent } from '../../atoms/form/form-group';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators } from '@angular/common';
import { XFormActionsComponent } from '../../atoms/form/form-actions';

@Component({
  selector: 'x-signin-form',
  directives: [FORM_DIRECTIVES, XFormComponent, XLabelComponent, XButtonComponent, XInputComponent,
    XFormGroupComponent, XFormActionsComponent],
  template: `
    <x-form [formModel]="form" (onSubmit)="handleSubmit($event)">
      <x-form-group>
        <x-label>E-mail</x-label>
        <x-input [formControl]="email" type="email" autofocus="true"></x-input>
      </x-form-group>
      <x-form-group>
        <x-label>Password</x-label>
        <x-input [formControl]="password" type="password"></x-input>
      </x-form-group>
      <x-form-actions>
        <x-button size="big" preset="positive" type="submit">Login</x-button>
      </x-form-actions>
    </x-form>
  `,
})
export class XSigninFormComponent {
  @Output() onSubmit = new EventEmitter<Event>();

  private form: ControlGroup;
  private email: Control;
  private password: Control;

  constructor(private builder: FormBuilder) {
    this.email = new Control('', Validators.required);
    this.password = new Control('', Validators.required);

    this.form = this.builder.group({
      email: this.email,
      password: this.password
    });
  }

  handleSubmit() {
    this.onSubmit.emit(this.form.value);
  }
}
