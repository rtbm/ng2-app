import { Component, Output, EventEmitter } from '@angular/core';
import {
  XFormComponent,
  XFormActionsComponent,
  XFormInputComponent,
  XFormGroupComponent,
  XFormMessageComponent,
  XButtonComponent,
  XOverlayComponent,
  XModalContentComponent,
  XModalMessageComponent,
  XFormContentComponent,
} from '../../../components';
import { ControlGroup, Control, FormBuilder, Validators } from '@angular/common';
import { select } from 'ng2-redux';

@Component({
  selector: 'qt-account-circle-edit-form',
  template: require('./account-circle-edit-form.component.html'),
  styles: [require('./account-circle-edit-form.component.less')],
  directives: [XFormComponent, XFormGroupComponent, XFormInputComponent, XButtonComponent, XFormActionsComponent,
    XFormMessageComponent, XOverlayComponent, XModalContentComponent, XModalMessageComponent, XFormContentComponent],
})
export class QtAccountCircleEditFormComponent {
  @select(state => state.circles.getIn(['updateCircle', 'item'])) private updateCircle$;

  @Output() private onSubmit = new EventEmitter();

  private form: ControlGroup;
  private _id: Control;
  private name: Control;

  constructor(private builder: FormBuilder) {
    this._id = new Control('', Validators.required);
    this.name = new Control('', Validators.required);

    this.form = this.builder.group({
      _id: this._id,
      name: this.name,
    });

    this.updateCircle$.subscribe((updateCircle: any) => {
      this._id.updateValue(updateCircle.get('_id'));
      this.name.updateValue(updateCircle.get('name'));
    });
  }

  handleSubmit() {
    if (this.form.status !== 'VALID') { return false; }
    this.onSubmit.emit(this.form.value);
  }
}
