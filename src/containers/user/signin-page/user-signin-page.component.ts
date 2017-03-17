import { Component, OnDestroy } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { UserActions } from '../../../actions';

@Component({
  selector: 'qt-user-signin-page',
  template: require('./user-signin-page.component.html'),
  styles: [require('./user-signin-page.component.scss')],
})

export class QtUserSigninPageComponent implements OnDestroy {
  @select(state => state.user) private user$;

  private isSigninError$: Observable<number>;
  private signinErrorCode$: Observable<number>;

  constructor(private userActions: UserActions,
              private title: Title) {

    title.setTitle('Sign in | Quotter');

    this.isSigninError$ = this.user$.map(s => s.getIn(['signin', 'isError']));
    this.signinErrorCode$ = this.user$.map(s => s.getIn(['signin', 'errorCode']));
  }

  ngOnDestroy = () => this.user$.unsubscribe();
}
