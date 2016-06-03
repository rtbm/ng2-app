import { Component } from '@angular/core';
import { XSignupFormComponent } from '../../molecules/user/signup-form';
import { SessionActions } from '../../../actions/session';
import { XWrapperComponent } from '../../atoms/wrapper';
import { AsyncPipe } from '@angular/common';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'x-user-signup-page',
  pipes: [AsyncPipe],
  directives: [ROUTER_DIRECTIVES, XSignupFormComponent, XWrapperComponent],
  template: ` 
    <x-wrapper>
      <h1>Signup</h1>

      <div>isError: {{ isError$ | async }}</div>
      <div>isPending: {{ isPending$ | async }}</div>

      <x-signup-form (onSubmit)="sessionActions.signup($event)"></x-signup-form>

      <p>Got an account? <a [routerLink]="['/user/signin']">Sign In</a></p>
    </x-wrapper>
  `,
  styles: [`
    x-signup-form {
      display: block;
      margin: 2rem 0;
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
