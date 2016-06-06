import { Component } from '@angular/core';
import { XSignupFormComponent } from '../../components/user/signup-form';
import { SessionActions } from '../../actions/session';
import { XWrapperComponent } from '../../components/wrapper';
import { AsyncPipe } from '@angular/common';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { XFormGroupComponent } from '../../components/form/form-group';

@Component({
  selector: 'x-user-signup-page',
  pipes: [AsyncPipe],
  directives: [ROUTER_DIRECTIVES, XSignupFormComponent, XWrapperComponent, XFormGroupComponent],
  template: ` 
    <x-wrapper>
      <h1>Sign up</h1>
      <x-signup-form (onSubmit)="sessionActions.signup($event)"></x-signup-form>
      <p>Got an account? <a [routerLink]="['/user/signin']">Sign In</a></p>
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

    x-signup-form {
      display: inline-block;
      background: #fff;      
      margin: 0 0 2rem;
      text-align: left;
    }
    
    :host x-form-actions {
      background: #177ba9;
      border-top: .1rem solid #0b6190;
      width: 100%;
      box-sizing: border-box;
    }
    
    :host x-button,
    :host x-button button {
      width: 100%;
    }

    :host x-form-group,
    :host x-input {
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
export class XUserSignupPageComponent {
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
