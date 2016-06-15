import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { XButtonComponent } from '../../components/button';
import { XMenuComponent, XMenuItemComponent } from '../../components/menu';
import { SessionActions } from '../../actions/session';
import { UserService } from '../../services/user';

@Component({
  selector: 'qt-account-box',
  directives: [ROUTER_DIRECTIVES, XButtonComponent, XMenuComponent, XMenuItemComponent],
  template: require('./account-box.component.html'),
  styles: [require('./account-box.component.less')],
})
export class QtAccountBoxComponent {
  constructor(private router: Router,
              private sessionActions: SessionActions,
              private userService: UserService
  ) {}

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
