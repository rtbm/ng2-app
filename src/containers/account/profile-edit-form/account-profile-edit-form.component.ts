import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from '../../../models/user.model';

@Component({
  selector: 'qt-account-profile-edit-form',
  template: require('./account-profile-edit-form.component.html'),
  styles: [require('./account-profile-edit-form.component.scss')],
})
export class QtAccountProfileEditFormComponent {
  @Output() private onSubmit = new EventEmitter();
  @Input() private user: User;

  private loaded: boolean = false;
  private form: FormGroup;
  private _id: FormControl = new FormControl('');
  private first_name: FormControl = new FormControl('');
  private last_name: FormControl = new FormControl('');
  private bio: FormControl = new FormControl('');
  private avatar: FormControl = new FormControl('');

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      _id: this._id,
      profile: builder.group({
        first_name: this.first_name,
        last_name: this.last_name,
        bio: this.bio,
        avatar: this.avatar,
      }),
    });
  }

  changeAvatar = img => this.avatar.setValue(img);

  ngOnChanges(values) {
    if (!this._id || this.loaded) {
      return false;
    }

    this._id.setValue(values.user.currentValue._id);

    Object.keys(values.user.currentValue.profile).map(key => {
      if (this[key] && this[key] instanceof FormControl) {
        this[key].setValue(values.user.currentValue.profile[key]);
      }
    });

    this.loaded = true;
  }

  handleSubmit() {
    if (!this.form.valid) {
      return false;
    }

    const formData = Object.assign({}, this.form.value, {
      profile: Object.assign({}, this.form.value.profile, {
        avatar: this.avatar.value,
      }),
    });

    this.onSubmit.emit(formData);
  }
}
