import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  XWrapperComponent,
  XButtonComponent,
  XModalFormComponent,
  XListComponent,
  XListItemComponent,
  XListItemActionsComponent,
  XTabComponent,
} from '../../../components';
import { UsersActions } from '../../../actions/users.actions';
import { select } from 'ng2-redux';
import { AsyncPipe, NgSwitch, NgSwitchCase } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'qt-account-users-page',
  template: require('./account-users-page.component.html'),
  styles: [require('./account-users-page.component.scss')],
  directives: [ROUTER_DIRECTIVES, NgSwitch, NgSwitchCase, XWrapperComponent, XButtonComponent, XModalFormComponent,
    XListComponent, XListItemComponent, XListItemActionsComponent, XTabComponent],
  pipes: [AsyncPipe],
})
export class QtAccountUsersPageComponent implements OnInit, OnDestroy {
  @select(state => state.users) private users$;
  @select(state => state.user.getIn(['user', '_id'])) private userId$;

  private usersUsersItems$: Observable<any>;
  private routeParams$: Subscription;
  private filter: string;

  constructor(
    private usersActions: UsersActions,
    private activatedRoute: ActivatedRoute
  ) {
    this.usersUsersItems$ = this.users$.map(s => s.getIn(['users', 'items']).toJS());
  }

  ngOnInit() {
    this.routeParams$ = this.activatedRoute.params.subscribe((params: any) => {
      this.filter = params.filter || '';
      this.usersActions.fetchUsers(this.filter);
    });
  }

  ngOnDestroy() {
    this.users$.unsubscribe();
    this.userId$.unsubscribe();
    this.routeParams$.unsubscribe();
  }
}
