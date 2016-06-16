import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { XLogoComponent } from '../../components/logo';
import { XWrapperComponent } from '../../components/wrapper';
import { XMenuItemComponent, XMenuComponent } from '../../components/menu';
import { SessionActions } from '../../actions/session';
import { UserService } from '../../services/user';
import { XButtonComponent } from '../../components/button';

@Component({
  selector: 'qt-header',
  directives: [ROUTER_DIRECTIVES, XWrapperComponent, XLogoComponent, XMenuComponent,
    XMenuItemComponent, XButtonComponent],
  pipes: [AsyncPipe],
  template: require('./header.component.html'),
  styles: [require('./header.component.less')],
})
export class QtHeaderComponent {
  constructor(private router: Router,
              private sessionActions: SessionActions,
              private userService: UserService) {
  }

  handleSigninClick() {
    this.router.navigate(['/user/signin']);
  }

  handleSignupClick() {
    this.router.navigate(['/user/signup']);
  }

  handleLogoutClick() {
    this.sessionActions.logout();
    this.router.navigate(['/']);
  }
}
