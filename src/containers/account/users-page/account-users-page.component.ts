import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  XWrapperComponent,
  XButtonComponent,
  XModalFormComponent,
  XListComponent,
  XListItemComponent,
  XListItemActionsComponent,
  XListItemContentComponent,
  XTabsComponent,
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
    XListComponent, XListItemComponent, XListItemContentComponent, XListItemActionsComponent, XTabsComponent,
    XTabComponent],
  pipes: [AsyncPipe],
})
export class QtAccountUsersPageComponent implements OnInit, OnDestroy {
  @select(['user', 'user', '_id']) userId$: Observable<string>;
  @select(['users', 'users', 'items']) usersItems$: Observable<Array<any>>;

  private routeParamsSubscription: Subscription;
  private filter: string;

  constructor(
    private usersActions: UsersActions,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.routeParamsSubscription = this.activatedRoute.params.subscribe((params: any) => {
      this.filter = params.filter || '';
      this.usersActions.fetchUsers(this.filter);
    });
  }

  ngOnDestroy = () => this.routeParamsSubscription.unsubscribe();
}
