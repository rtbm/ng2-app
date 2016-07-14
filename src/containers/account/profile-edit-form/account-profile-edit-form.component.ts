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
import { select } from 'ng2-redux';

@Component({
  selector: 'qt-account-profile-edit-form',
  template: require('./account-profile-edit-form.component.html'),
  styles: [require('./account-profile-edit-form.component.less')],
  directives: [XFormComponent, XFormActionsComponent, XFormInputComponent, XFormGroupComponent, XFormMessageComponent,
    XButtonComponent, XFormContentComponent, XFormTextareaComponent],
})
export class QtAccountProfileEditFormComponent implements OnDestroy {
  @select(state => state.profile.getIn(['profile', 'item'])) private profileItem$;

  @Output() private onSubmit = new EventEmitter();
  @Input() private profileModel;

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
  }

  ngOnChanges(values) {
    this.first_name.updateValue(values.profileModel.currentValue.first_name);
    this.last_name.updateValue(values.profileModel.currentValue.last_name);
    this.bio.updateValue(values.profileModel.currentValue.bio);
  }

  handleSubmit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }

  ngOnDestroy() {
    this.profileItem$.unsubscribe();
  }
}
