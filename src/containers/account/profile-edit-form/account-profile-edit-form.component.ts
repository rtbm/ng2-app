import { Component, Output, EventEmitter, Input } from '@angular/core';
import {
  XFormComponent,
  XFormActionsComponent,
  XFormInputComponent,
  XFormGroupComponent,
  XFormMessageComponent,
  XButtonComponent,
  XFormContentComponent,
  XFormTextareaComponent,
} from '../../../components';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'qt-account-profile-edit-form',
  template: require('./account-profile-edit-form.component.html'),
  styles: [require('./account-profile-edit-form.component.scss')],
  directives: [XFormComponent, XFormActionsComponent, XFormInputComponent, XFormGroupComponent, XFormMessageComponent,
    XButtonComponent, XFormContentComponent, XFormTextareaComponent],
})
export class QtAccountProfileEditFormComponent {
  @Output() private onSubmit = new EventEmitter();
  @Input() private user: Object;

  private form: FormGroup;
  private _id: FormControl;
  private first_name: FormControl;
  private last_name: FormControl;
  private bio: FormControl;

  constructor(builder: FormBuilder) {
    this._id = new FormControl('');
    this.first_name = new FormControl('');
    this.last_name = new FormControl('');
    this.bio = new FormControl('');

    this.form = builder.group({
      _id: this._id,
      profile: builder.group({
        first_name: this.first_name,
        last_name: this.last_name,
        bio: this.bio,
      }),
    });
  }

  ngOnChanges(values) {
    if (this._id.value || !values.user.currentValue._id) {
      return false;
    }

    this._id.setValue(values.user.currentValue._id);

    Object.keys(values.user.currentValue.profile).map(key => {
      if (this[key] && this[key] instanceof FormControl) {
        this[key].setValue(values.user.currentValue.profile[key]);
      }
    });
  }

  handleSubmit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }
}
