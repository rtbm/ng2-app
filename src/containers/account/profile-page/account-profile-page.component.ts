import { Component } from '@angular/core';
import { XWrapperComponent, XBoxComponent, XBoxHeaderComponent, XBoxContentComponent } from '../../../components';
import { QtAccountProfileEditFormComponent } from '../profile-edit-form';
import { ProfileActions } from '../../../actions';
import { select } from 'ng2-redux';

@Component({
  selector: 'qt-account-profile-page',
  template: require('./account-profile-page.component.html'),
  styles: [require('./account-profile-page.component.less')],
  directives: [XWrapperComponent, QtAccountProfileEditFormComponent, XBoxComponent, XBoxHeaderComponent,
    XBoxContentComponent],
})
export class QtAccountProfilePageComponent {
  @select(state => state.session.getIn(['user', '_id'])) private _id$;

  private _id;

  constructor(private profileActions: ProfileActions) {
    this._id$.subscribe((_id: string) => {
      this._id = _id;
      this.profileActions.readProfile(_id);
    });
  }

  handleSubmit(profile) {
    return this.profileActions.updateProfile(this._id, profile);
  }
}
