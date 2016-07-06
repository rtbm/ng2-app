import { Component, Output, EventEmitter } from '@angular/core';
import {
  XFormComponent,
  XFormActionsComponent,
  XFormInputComponent,
  XFormGroupComponent,
  XFormMessageComponent,
  XButtonComponent,
  XFormContentComponent,
} from '../../../components';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'qt-account-circle-add-form',
  template: require('./account-circle-add-form.component.html'),
  styles: [require('./account-circle-add-form.component.less')],
  directives: [XFormComponent, XFormGroupComponent, XFormInputComponent, XButtonComponent, XFormActionsComponent,
    XFormMessageComponent, XFormContentComponent],
})
export class QtAccountCircleAddFormComponent {
  @Output() private onSubmit = new EventEmitter();

  private form: FormGroup;
  private name: FormControl;

  constructor(builder: FormBuilder) {
    this.name = new FormControl('', Validators.required);

    this.form = builder.group({
      name: this.name,
    });
  }

  handleSubmit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }
}
