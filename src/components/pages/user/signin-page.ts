import { Component } from '@angular/core';
import { XSigninFormComponent } from '../../molecules/user/signin-form';
import { SessionActions } from '../../../actions/session';
import { AsyncPipe } from '@angular/common';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { XWrapperComponent } from '../../atoms/wrapper';

@Component({
  selector: 'x-user-signin-page',
  pipes: [AsyncPipe],
  directives: [ROUTER_DIRECTIVES, XSigninFormComponent, XWrapperComponent],
  template: ` 
    <x-wrapper>
      <h1>Sign in</h1>
      <x-signin-form (onSubmit)="sessionActions.signin($event)"></x-signin-form>
      <p>Need an account? <a [routerLink]="['/user/signup']">Sign Up</a></p>
    </x-wrapper>
  `,
  styles: [`
    :host {
      display: block;
      background: #0b6190;
      padding: 3rem 0;
    }
    
    h1 {
      color: #fff;
    }

    x-signin-form {
      display: inline-block;
      background: #fff;
      margin: 0 0 2rem;
      text-align: left;
    }
    
    :host x-form-actions {
      background: #177ba9;
      border-top: 1px solid #0b6190;
      width: 100%;
      box-sizing: border-box;
    }
    
    :host x-button,
    :host x-button button {
      width: 100%;
    }

    :host x-form-group, :host x-input {
      width: 30rem;
    }
    
    :host x-form {
      padding: 2rem 0 0 0;
    }

    p {
      color: #fff;
    }

    p a {
      color: #4DBCE9;
    }
  `],
})

export class XUserSigninPageComponent {
  @select(state => state.session.get('isError')) private isError$: Observable<boolean>;
  @select(state => state.session.get('isPending')) private isPending$: Observable<boolean>;
  @select(state => state.session.get('isAuthorized')) private isAuthorized$: Observable<boolean>;

  constructor(private sessionActions: SessionActions,
              private router: Router) {
    this.isAuthorized$.subscribe((result: boolean) => {
      if (result) {
        this.router.navigate(['/']);
      }
    });
  }
}
