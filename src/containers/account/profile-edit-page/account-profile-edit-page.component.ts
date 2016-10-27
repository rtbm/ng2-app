import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { ProfileActions } from '../../../actions';

@Component({
  selector: 'qt-account-profile-edit-page',
  template: require('./account-profile-edit-page.component.html'),
  styles: [require('./account-profile-edit-page.component.scss')],
})
export class QtAccountProfileEditPageComponent {
  @select(['user', 'user', '_id']) userId$: Observable<string>;
  @select(['profile', 'updateUser', 'isError']) isUpdateUserError$: Observable<boolean>;
  @select(['profile', 'updateUser', 'isSuccess']) isUpdateUserSuccess$: Observable<boolean>;
  @select(['profile', 'updateUser', 'isPending']) isUpdateUserPending: Observable<boolean>;
  @select(['profile', 'user', 'isPending']) isUserPending$: Observable<boolean>;
  @select(['profile', 'user', 'item']) userItem$: Observable<any>;

  constructor(private profileActions: ProfileActions,
              private title: Title) {

    title.setTitle('Account - Edit Profile | Quotter');

    this.userId$.first()
      .subscribe((_id: string) => this.profileActions.fetchUser(_id));
  }

  handleSubmit = user => this.profileActions.updateUser(user);
}
