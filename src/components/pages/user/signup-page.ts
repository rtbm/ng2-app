import { Component } from '@angular/core';
import { XSignupFormComponent } from '../../molecules/user/signup-form';
import { SessionActions } from '../../../actions/session';
import { XWrapperComponent } from '../../atoms/wrapper';
import { AsyncPipe } from '@angular/common';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { XFormGroupComponent } from '../../atoms/form/form-group';

@Component({
  selector: 'x-user-signup-page',
  pipes: [AsyncPipe],
  directives: [ROUTER_DIRECTIVES, XSignupFormComponent, XWrapperComponent, XFormGroupComponent],
  template: ` 
    <x-wrapper>
      <x-signup-form (onSubmit)="sessionActions.signup($event)"></x-signup-form>
      <p>Got an account? <a [routerLink]="['/user/signin']">Sign In</a></p>
    </x-wrapper>
  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;
      height: 100%;
      background: #222;
      padding: 5rem 0;
    }

    :host x-signup-form {
      display: inline-block;
      background: #f3f3f3;
      padding: 2rem;
      margin: 0 0 2rem;
      text-align: left;
    }
    
    :host x-form-group, :host x-input {
      width: 30rem;
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
