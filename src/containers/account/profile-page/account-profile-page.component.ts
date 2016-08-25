import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AsyncPipe } from '@angular/common';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { ProfileActions } from '../../../actions';
import { QtAccountProfileEditFormComponent } from '../profile-edit-form';
import {
  XWrapperComponent,
  XBoxComponent,
  XBoxHeaderComponent,
  XBoxContentComponent,
  XFormMessageComponent,
} from '../../../components';

@Component({
  selector: 'qt-account-profile-page',
  template: require('./account-profile-page.component.html'),
  styles: [require('./account-profile-page.component.scss')],
  directives: [XWrapperComponent, QtAccountProfileEditFormComponent, XBoxComponent, XBoxHeaderComponent,
    XBoxContentComponent, XFormMessageComponent],
  pipes: [AsyncPipe],
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

    this.userId$
      .first()
      .subscribe((_id: string) => this.profileActions.fetchUser(_id));
  }

  handleSubmit = user => this.profileActions.updateUser(user);
}
