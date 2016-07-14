import { Component, OnDestroy } from '@angular/core';
import {
  XWrapperComponent,
  XBoxComponent,
  XBoxHeaderComponent,
  XBoxContentComponent,
  XFormMessageComponent,
} from '../../../components';
import { QtAccountProfileEditFormComponent } from '../profile-edit-form';
import { ProfileActions } from '../../../actions';
import { select } from 'ng2-redux';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'qt-account-profile-page',
  template: require('./account-profile-page.component.html'),
  styles: [require('./account-profile-page.component.less')],
  directives: [XWrapperComponent, QtAccountProfileEditFormComponent, XBoxComponent, XBoxHeaderComponent,
    XBoxContentComponent, XFormMessageComponent],
  pipes: [AsyncPipe],
})
export class QtAccountProfilePageComponent implements OnDestroy {
  @select(state => state.session.getIn(['user', '_id'])) private userId$;
  @select(state => state.profile) private profile$;

  private userId: string;
  private isUpdateProfileError$: Observable<boolean>;
  private isUpdateProfileSuccess$: Observable<boolean>;
  private profileItem$: Observable<any>;

  constructor(private profileActions: ProfileActions) {
    this.isUpdateProfileError$ = this.profile$.map(s => s.getIn(['updateProfile', 'isError']));
    this.isUpdateProfileSuccess$ = this.profile$.map(s => s.getIn(['updateProfile', 'isSuccess']));
    this.profileItem$ = this.profile$.map(s => s.getIn(['profile', 'item']).toJS());

    this.userId$
      .first()
      .subscribe((_id: string) => { this.userId = _id; })
      .unsubscribe();

    this.profileActions.readProfile(this.userId);
  }

  handleSubmit(profile) {
    return this.profileActions.updateProfile(this.userId, profile);
  }

  ngOnDestroy() {
    this.userId$.unsubscribe();
    this.profile$.unsubscribe();
  }
}
