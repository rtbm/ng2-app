import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { XButtonComponent } from '../../components/button';
import { XMenuComponent, XMenuItemComponent } from '../../components/menu';
import { select } from 'ng2-redux';
import { JwtHelper } from 'angular2-jwt';
import { SessionActions } from '../../actions/session';
import { Observable } from 'rxjs';

@Component({
  selector: 'qt-account-box',
  directives: [ROUTER_DIRECTIVES, XButtonComponent, XMenuComponent, XMenuItemComponent],
  pipes: [AsyncPipe],
  template: require('./account-box.component.html'),
  styles: [require('./account-box.component.less')],
})
export class QtAccountBoxComponent {
  @select(state => state.session.get('isAuthorized')) private isAuthorized$: Observable<boolean>;
  @select(state => state.session.get('id_token')) private idToken$: Observable<string>;

  private email: string = '';

  constructor(
    private router: Router,
    private sessionActions: SessionActions
  ) {
    const jwt = new JwtHelper();

    this.idToken$.subscribe((token: string) => {
      if (token) {
        const decodedToken = jwt.decodeToken(token);
        this.email = decodedToken.email;
      } else {
        this.email = '';
      }
    });
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
