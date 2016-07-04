import { Component, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import {
  XLogoComponent,
  XWrapperComponent,
  XMenuItemComponent,
  XMenuComponent,
  XButtonComponent,
} from '../../components';
import { UserActions } from '../../actions';
import { select } from 'ng2-redux';

@Component({
  selector: 'qt-header',
  template: require('./header.component.html'),
  styles: [require('./header.component.less')],
  directives: [ROUTER_DIRECTIVES, XWrapperComponent, XLogoComponent, XMenuComponent,
    XMenuItemComponent, XButtonComponent],
  pipes: [AsyncPipe],
})
export class QtHeaderComponent implements OnDestroy {
  @select(state => state.session.get('isAuthorized')) private isAuthorized$;
  @select(state => state.session.getIn(['user', 'email'])) private email$;

  constructor(private router: Router,
              private userActions: UserActions) {
  }

  handleSigninClick() {
    this.router.navigate(['/user/signin']);
  }

  handleSignupClick() {
    this.router.navigate(['/user/signup']);
  }

  handleLogoutClick() {
    this.userActions.logout();
  }

  ngOnDestroy() {
    this.isAuthorized$.unsubscribe();
    this.email$.unsubscribe();
  }
}
