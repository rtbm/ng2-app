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
import { JwtHelper } from 'angular2-jwt/angular2-jwt';

@Component({
  selector: 'qt-header',
  template: require('./header.component.html'),
  styles: [require('./header.component.less')],
  directives: [ROUTER_DIRECTIVES, XWrapperComponent, XLogoComponent, XMenuComponent,
    XMenuItemComponent, XButtonComponent],
})
export class QtHeaderComponent implements OnDestroy {
  @select(state => state.user.get('id_token')) private id_token$;

  private user: Object;

  constructor(private router: Router,
              private userActions: UserActions) {

    this.id_token$
      .filter(id_token => !!id_token)
      .subscribe((id_token: string) => {
        this.user = new JwtHelper().decodeToken(id_token);
      });
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

  ngOnDestroy() {
    this.id_token$.unsubscribe();
  }
}
