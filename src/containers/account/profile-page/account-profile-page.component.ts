import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { ProfileActions } from '../../../actions';

@Component({
  selector: 'qt-account-profile-page',
  template: require('./account-profile-page.component.html'),
  styles: [require('./account-profile-page.component.scss')],
})
export class QtAccountProfilePageComponent {
  @select(['user', 'user', '_id']) userId$: Observable<string>;
  @select(['profile', 'updateUser', 'isError']) isUpdateProfileError$: Observable<boolean>;
  @select(['profile', 'updateUser', 'isSuccess']) isUpdateProfileSuccess$: Observable<boolean>;
  @select(['profile', 'user', 'isPending']) userIsPending$: Observable<boolean>;
  @select(['profile', 'user', 'item']) userItem$: Observable<any>;

  constructor(private profileActions: ProfileActions,
              private title: Title) {

    title.setTitle('Account - Profile | Quotter');

    this.userId$.first()
      .subscribe((_id: string) => this.profileActions.fetchUser(_id));
  }

  handleSubmit = user => this.profileActions.updateUser(user);
}
