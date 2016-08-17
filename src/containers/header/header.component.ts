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
import { Observable } from 'rxjs';

@Component({
  selector: 'qt-header',
  template: require('./header.component.html'),
  styles: [require('./header.component.scss')],
  directives: [ROUTER_DIRECTIVES, XWrapperComponent, XLogoComponent, XMenuComponent,
    XMenuItemComponent, XButtonComponent],
  pipes: [AsyncPipe],
})
export class QtHeaderComponent {
  @select(['user', 'id_token']) idToken$: Observable<string>;
  @select(['user', 'user', 'email']) userEmail$: Observable<string>;

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
    this.userActions.signout();
  }
}
