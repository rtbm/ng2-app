import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { XLogoComponent } from '../../components/logo';
import { XWrapperComponent } from '../../components/wrapper';
import { XMenuItemComponent, XMenuComponent } from '../../components/menu';
import { UserActions } from '../../actions/user';
import { XButtonComponent } from '../../components/button';
import { select } from 'ng2-redux/lib/index';

@Component({
  selector: 'qt-header',
  directives: [ROUTER_DIRECTIVES, XWrapperComponent, XLogoComponent, XMenuComponent,
    XMenuItemComponent, XButtonComponent],
  pipes: [AsyncPipe],
  template: require('./header.component.html'),
  styles: [require('./header.component.less')],
})
export class QtHeaderComponent {
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
}
