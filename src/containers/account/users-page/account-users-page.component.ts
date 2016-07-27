import { Component, OnDestroy } from '@angular/core';
import {
  XWrapperComponent,
  XButtonComponent,
  XModalFormComponent,
  XListComponent,
  XListItemComponent,
} from '../../../components';
import { UsersActions } from '../../../actions/users.actions';
import { select } from 'ng2-redux';
import { QtAccountCirclesSelectFormComponent } from '../circles-select-form';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../../../models';

@Component({
  selector: 'qt-account-users-page',
  template: require('./account-users-page.component.html'),
  styles: [require('./account-users-page.component.less')],
  directives: [XWrapperComponent, XButtonComponent, XModalFormComponent, QtAccountCirclesSelectFormComponent,
    XListComponent, XListItemComponent],
  pipes: [AsyncPipe],
})
export class QtAccountUsersPageComponent implements OnDestroy {
  @select(state => state.users) private users$;

  private usersUsers$: Observable<any>;
  private usersFollow$: Observable<any>;
  private isFollowModalVisible$: Observable<boolean>;
  private usersFollowItem$: Observable<any>;

  constructor(private usersActions: UsersActions) {
    this.usersActions.fetchUsers();

    this.usersUsers$ = this.users$.map(s => s.getIn(['users', 'items']).toJS());
    this.usersFollow$ = this.users$.map(s => s.getIn(['follow']));
    this.usersFollowItem$ = this.users$.map(s => s.getIn(['follow', 'item']).toJS());
    this.isFollowModalVisible$ = this.users$.map(s => s.getIn(['follow', 'isModalVisible']));
  }

  handleFollow(circle) {
    this.usersFollowItem$
      .first()
      .subscribe((user: User) => this.usersActions.follow(circle._id, user));
  }

  ngOnDestroy() {
    this.users$.unsubscribe();
  }
}
