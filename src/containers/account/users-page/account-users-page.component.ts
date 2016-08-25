import { Component, OnDestroy, OnInit } from '@angular/core';
import { AsyncPipe, NgSwitch, NgSwitchCase } from '@angular/common';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { select } from 'ng2-redux';
import { Observable, Subscription } from 'rxjs';
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
  XBoxComponent,
} from '../../../components';
import { UsersActions } from '../../../actions/users.actions';

@Component({
  selector: 'qt-account-users-page',
  template: require('./account-users-page.component.html'),
  styles: [require('./account-users-page.component.scss')],
  directives: [ROUTER_DIRECTIVES, NgSwitch, NgSwitchCase, XWrapperComponent, XButtonComponent, XModalFormComponent,
    XListComponent, XListItemComponent, XListItemContentComponent, XListItemActionsComponent, XTabsComponent,
    XTabComponent, XBoxComponent],
  pipes: [AsyncPipe],
})
export class QtAccountUsersPageComponent implements OnInit, OnDestroy {
  @select(['user', 'user', '_id']) userId$: Observable<string>;
  @select(['users', 'users', 'items']) usersItems$: Observable<Array<any>>;
  @select(['users', 'users', 'isPending']) usersIsPending$: Observable<boolean>;

  private routeParamsSubscription: Subscription;
  private filter: string;

  constructor(private title: Title,
              private usersActions: UsersActions,
              private activatedRoute: ActivatedRoute) {

    title.setTitle('Account - Users | Quotter');
  }

  ngOnInit() {
    this.routeParamsSubscription = this.activatedRoute.params.subscribe((params: any) => {
      this.filter = params.filter || '';
      this.usersActions.fetchUsers(this.filter);
    });
  }

  ngOnDestroy = () => this.routeParamsSubscription.unsubscribe();
}
