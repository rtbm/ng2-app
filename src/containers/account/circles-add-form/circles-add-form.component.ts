import { Component, Output, EventEmitter } from '@angular/core';
import {
  XFormComponent,
  XFormActionsComponent,
  XFormInputComponent,
  XFormGroupComponent,
  XFormMessageComponent,
  XButtonComponent,
} from '../../../components';
import { ControlGroup, Control, FormBuilder, Validators } from '@angular/common';
import { CirclesActions } from '../../../actions/circles';

@Component({
  selector: 'qt-circles-add-form',
  template: require('./circles-add-form.component.html'),
  styles: [require('./circles-add-form.component.less')],
  directives: [XFormComponent, XFormGroupComponent, XFormInputComponent, XButtonComponent, XFormActionsComponent,
    XFormMessageComponent],
})
export class QtCirclesAddFormComponent {
  @Output() private onSubmit = new EventEmitter();

  private form: ControlGroup;
  private name: Control;

  constructor(private builder: FormBuilder) {
    this.name = new Control('', Validators.required);

    this.form = this.builder.group({
      name: this.name,
    });
  }

  handleSubmit() {
    if (this.form.status !== 'VALID') { return false; }
    this.onSubmit.emit(this.form.value);
  }
}
