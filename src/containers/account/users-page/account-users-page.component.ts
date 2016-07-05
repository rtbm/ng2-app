import { Component, OnDestroy } from '@angular/core';
import { XWrapperComponent, XButtonComponent } from '../../../components';
import { UsersActions } from '../../../actions/users';
import { select } from 'ng2-redux';
import { QtAccountCirclesModalComponent } from '../circles-modal';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'qt-account-users-page',
  template: require('./account-users-page.component.html'),
  styles: [require('./account-users-page.component.less')],
  directives: [XWrapperComponent, XButtonComponent, QtAccountCirclesModalComponent],
  pipes: [AsyncPipe],
})
export class QtAccountUsersPageComponent implements OnDestroy {
  @select(state => state.users.get('users')) private usersUsers$;
  @select(state => state.users.get('follow')) private usersFollow$;

  private usersUsers;
  private usersFollow;

  constructor(private usersActions: UsersActions) {
    this.usersActions.fetchUsers();

    this.usersUsers$.subscribe((items: any) => {
      this.usersUsers = items.toJS();
    });

    this.usersFollow$.subscribe((follow: any) => {
      this.usersFollow = follow.toJS();
    });
  }

  handleFollow(circle) {
    this.usersActions.follow(circle._id, this.usersFollow.user);
  }

  ngOnDestroy() {
    this.usersUsers$.unsubscribe();
    this.usersFollow$.unsubscribe();
  }
}
