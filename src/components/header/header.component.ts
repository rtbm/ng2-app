import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select } from 'ng2-redux';
import { AsyncPipe } from '@angular/common';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { XLogoComponent } from '../logo';
import { XUserAccountBoxComponent } from '../user';
import { XWrapperComponent } from '../wrapper';
import { JwtHelper } from 'angular2-jwt';
import { XMenuItemComponent, XMenuComponent } from '../menu';

@Component({
  selector: 'x-header',
  directives: [ROUTER_DIRECTIVES, XWrapperComponent, XLogoComponent, XUserAccountBoxComponent, XMenuComponent,
    XMenuItemComponent],
  pipes: [AsyncPipe],
  template: `
    <x-wrapper>
      <x-logo></x-logo>
    
      <x-menu>
        <x-menu-item><a [routerLink]="['/']">Home</a></x-menu-item>
        <x-menu-item><a [routerLink]="['/account/dashboard']">Account</a></x-menu-item>
      </x-menu>
    
      <x-user-account-box
        [isLogged]="isAuthorized$ | async"
        [email]="email"
        (onSigninClick)="handleSigninClick()"
        (onSignupClick)="handleSignupClick()"
      ></x-user-account-box>
    </x-wrapper>
  `,
  styles: [require('./header.component.css')],
})
export class XHeaderComponent {
  @select(state => state.session.get('isAuthorized')) private isAuthorized$: Observable<boolean>;
  @select(state => state.session.get('id_token')) private idToken$: Observable<string>;

  private email: string = '';

  constructor(private router: Router) {
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
}
