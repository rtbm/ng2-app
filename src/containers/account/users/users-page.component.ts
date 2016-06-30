import { Component, OnDestroy } from '@angular/core';
import { XWrapperComponent } from '../../../components';
import { UsersActions } from '../../../actions/users';
import { select } from 'ng2-redux';
import { XButtonComponent } from '../../../components';

@Component({
  selector: 'account-users-page',
  template: require('./users-page.component.html'),
  styles: [require('./users-page.component.less')],
  directives: [XWrapperComponent, XButtonComponent],
})
export class QtAccountUsersPageComponent implements OnDestroy {
  @select(state => state.users.getIn(['users', 'items'])) private users$;

  private users = [];

  constructor(private usersActions: UsersActions) {
    this.usersActions.fetchUsers();

    this.users$.subscribe((users: any) => {
      this.users = users.toJS();
    });
  }

  ngOnDestroy() {
    this.users$.unsubscribe();
  }
}
