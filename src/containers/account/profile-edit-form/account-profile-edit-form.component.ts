import { Component, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
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
    const currVal = values.user.currentValue;

    if (currVal._id) {
      this._id.updateValue(currVal._id);
    }

    if (currVal.profile) {
      if (currVal.profile.first_name) {
        this.first_name.updateValue(currVal.profile.first_name);
      }

      if (currVal.profile.last_name) {
        this.last_name.updateValue(currVal.profile.last_name);
      }

      if (currVal.profile.bio) {
        this.bio.updateValue(currVal.profile.bio);
      }
    }
  }

  handleSubmit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }
}
