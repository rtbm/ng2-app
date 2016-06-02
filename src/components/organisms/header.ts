import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {select} from "ng2-redux";
import {AsyncPipe} from "@angular/common";
import {Router} from "@angular/router";
import {XLogoComponent} from "../atoms/logo";
import {XSearchFormComponent} from "../molecules/search-form";
import {XTopMenuComponent} from "../molecules/menus/top-menu";
import {XAccountBoxComponent} from "../molecules/user/account-box";
import {XWrapperComponent} from '../atoms/wrapper';
import {JwtHelper} from "angular2-jwt";

@Component({
  selector: 'x-header',
  directives: [XLogoComponent, XSearchFormComponent, XTopMenuComponent, XAccountBoxComponent, XWrapperComponent],
  pipes: [AsyncPipe],
  template: `
    <x-wrapper>
      <x-logo></x-logo>
      <x-top-menu></x-top-menu>
      <x-account-box
        [isLogged]="isAuthorized$ | async"
        [email]="email"
        (onSigninClick)="handleSigninClick()"
        (onSignupClick)="handleSignupClick()"
      ></x-account-box>
    </x-wrapper>
  `,
  styles: [`
    :host {       
      padding: 1rem 0;
      height: 3.2rem;
      display: block;
      background: #fff;
    }
    
    x-logo, x-top-menu {
      vertical-align: middle;
    }
    
    x-account-box {
      float: right;
    }
  `],
})
export class XHeaderComponent {
  @select(state => state.session.get('isAuthorized')) private isAuthorized$: Observable<boolean>;
  @select(state => state.session.get('id_token')) private idToken$: Observable<string>;

  private email: string = '';

  constructor(private router: Router) {
    const jwt = new JwtHelper();

    this.idToken$.subscribe((token: string) => {
      if(token) {
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
