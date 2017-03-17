import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { select } from '@angular-redux/store';
import { Observable, Subscription } from 'rxjs';
import { UsersActions } from '../../../actions/users.actions';

@Component({
  selector: 'qt-account-users-page',
  template: require('./account-users-page.component.html'),
  styles: [require('./account-users-page.component.scss')],
})
export class QtAccountUsersPageComponent implements OnInit, OnDestroy {
  @select(['user', 'user', '_id']) userId$: Observable<string>;
  @select(['users', 'users', 'items']) usersItems$: Observable<any[]>;
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
