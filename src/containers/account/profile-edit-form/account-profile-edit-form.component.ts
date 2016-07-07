import { Component, Output, EventEmitter } from '@angular/core';
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
import { select } from 'ng2-redux';

@Component({
  selector: 'qt-account-profile-edit-form',
  template: require('./account-profile-edit-form.component.html'),
  styles: [require('./account-profile-edit-form.component.less')],
  directives: [XFormComponent, XFormActionsComponent, XFormInputComponent, XFormGroupComponent, XFormMessageComponent,
    XButtonComponent, XFormContentComponent, XFormTextareaComponent],
})
export class QtAccountProfileEditFormComponent {
  @select(state => state.profile) private profile$;

  @Output() private onSubmit = new EventEmitter();

  private form: FormGroup;
  private first_name: FormControl;
  private last_name: FormControl;
  private bio: FormControl;

  constructor(builder: FormBuilder) {
    this.first_name = new FormControl('');
    this.last_name = new FormControl('');
    this.bio = new FormControl('');

    this.form = builder.group({
      first_name: this.first_name,
      last_name: this.last_name,
      bio: this.bio,
    });

    this.profile$.subscribe((profile: any) => {
      this.first_name.updateValue(profile.getIn(['item', 'first_name']));
      this.last_name.updateValue(profile.getIn(['item', 'last_name']));
      this.bio.updateValue(profile.getIn(['item', 'bio']));
    });
  }

  handleSubmit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }
}
