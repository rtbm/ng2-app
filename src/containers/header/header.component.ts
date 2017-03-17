import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserActions } from '../../actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'qt-header',
  template: require('./header.component.html'),
  styles: [require('./header.component.scss')],
})
export class QtHeaderComponent {
  @select(['user', 'id_token']) idToken$: Observable<string>;
  @select(['user', 'user', 'email']) userEmail$: Observable<string>;

  constructor(private router: Router,
              private userActions: UserActions) {
  }

  handleSigninClick = () => this.router.navigate(['/user/signin']);

  handleSignupClick = () => this.router.navigate(['/user/signup']);

  handleLogoutClick = () => this.userActions.signout();
}
