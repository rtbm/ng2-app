import {Component} from "@angular/core";
import {XSigninFormComponent} from "../../molecules/user/signin-form";
import {SessionActions} from "../../../actions/session";
import {AsyncPipe} from "@angular/common";
import {select} from "ng2-redux";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {XWrapperComponent} from '../../atoms/wrapper';

@Component({
  selector: 'x-user-signin-page',
  pipes: [AsyncPipe],
  directives: [XSigninFormComponent, XWrapperComponent],
  template: ` 
    <x-wrapper>
      <h1>Signin</h1>
      
      <div>isError: {{ isError$ | async }}</div>
      <div>isPending: {{ isPending$ | async }}</div>
      
      <x-signin-form (onSubmit)="sessionActions.signin($event)"></x-signin-form>
    </x-wrapper>
  `,
  styles: [`
    x-signin-form {
      display: block;
      margin: 2rem 0;
    }
  `],
})
export class XUserSigninPageComponent {
  @select(n => n.session.get('isError')) private isError$: Observable<boolean>;
  @select(n => n.session.get('isPending')) private isPending$: Observable<boolean>;
  @select(n => n.session.get('isLogged')) private isLogged$: Observable<boolean>;

  constructor(private sessionActions: SessionActions,
              private router: Router) {
    this.isLogged$.subscribe((result: boolean) => {
      if (result) {
        this.router.navigate(['/']);
      }
    });
  }
}
