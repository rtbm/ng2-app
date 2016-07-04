import { Component, OnDestroy } from '@angular/core';
import { XWrapperComponent } from '../../../components';
import { UsersActions } from '../../../actions/users';
import { select } from 'ng2-redux';
import { XButtonComponent } from '../../../components';

@Component({
  selector: 'qt-account-users-page',
  template: require('./account-users-page.component.html'),
  styles: [require('./account-users-page.component.less')],
  directives: [XWrapperComponent, XButtonComponent],
})
export class QtAccountUsersPageComponent implements OnDestroy {
  @select(state => state.users.getIn(['users', 'items'])) private users$;

  private items = [];

  constructor(private usersActions: UsersActions) {
    this.usersActions.fetchUsers();

    this.users$.subscribe((items: any) => {
      this.items = items.toJS();
    });
  }

  follow(user) {
    this.usersActions.follow(user);
  }

  ngOnDestroy() {
    this.users$.unsubscribe();
  }
}
