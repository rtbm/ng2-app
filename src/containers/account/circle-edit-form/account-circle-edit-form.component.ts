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
import { select } from 'ng2-redux';

@Component({
  selector: 'qt-account-circle-edit-form',
  template: require('./account-circle-edit-form.component.html'),
  styles: [require('./account-circle-edit-form.component.less')],
  directives: [XFormComponent, XFormGroupComponent, XFormInputComponent, XButtonComponent, XFormActionsComponent,
    XFormMessageComponent, XFormContentComponent],
})
export class QtAccountCircleEditFormComponent {
  @select(state => state.circles.getIn(['updateCircle', 'item'])) private updateCircle$;

  @Output() private onSubmit = new EventEmitter();

  private form: FormGroup;
  private _id: FormControl;
  private name: FormControl;

  constructor(builder: FormBuilder) {
    this._id = new FormControl('', Validators.required);
    this.name = new FormControl('', Validators.required);

    this.form = builder.group({
      _id: this._id,
      name: this.name,
    });

    this.updateCircle$.subscribe((updateCircle: any) => {
      this._id.updateValue(updateCircle.get('_id'));
      this.name.updateValue(updateCircle.get('name'));
    });
  }

  handleSubmit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }
}
