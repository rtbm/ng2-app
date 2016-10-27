import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { ProfileActions } from '../../../actions';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'qt-account-profile-page',
  template: require('./account-profile-page.component.html'),
  styles: [require('./account-profile-page.component.scss')],
})
export class QtAccountProfilePageComponent {
  @select(['profile', 'user', 'isPending']) isUserPending$: Observable<boolean>;
  @select(['profile', 'user', 'item']) userItem$: Observable<any>;

  private userItem: any;
  private routeParamsSubscription: Subscription;

  constructor(private profileActions: ProfileActions,
              private title: Title,
              private activatedRoute: ActivatedRoute) {

    title.setTitle('Account - Profile | Quotter');

    this.activatedRoute.params.subscribe((params: any) => this.profileActions.fetchUser(params._id));

    this.userItem$.subscribe(userItem$ => {
      this.userItem = userItem$.toJS();
    });
  }

  ngOnDestroy = () => this.routeParamsSubscription.unsubscribe();
}
