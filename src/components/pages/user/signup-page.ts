import {Component} from "@angular/core";
import {XSignupFormComponent} from "../../molecules/user/signup-form";
import {SessionActions} from "../../../actions/session";
import {XWrapperComponent} from "../../atoms/wrapper";
import {AsyncPipe} from "@angular/common";
import {select} from "ng2-redux";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'x-signup-page',
  pipes: [AsyncPipe],
  directives: [XSignupFormComponent, XWrapperComponent],
  template: ` 
    <x-wrapper>
      <h1>Signup</h1>
       
      <div>isError: {{ isError$ | async }}</div>
      <div>isPending: {{ isPending$ | async }}</div>
      
      <x-signup-form (onSubmit)="sessionActions.signup($event)"></x-signup-form>
    </x-wrapper>
  `,
  styles: [`
    x-signup-form {
      display: inline-block;
      background: #D6DCE2;
      padding: 2rem;
    }
  `]
})
export class XSignupPageComponent {
  @select(n => n.session.get('isError')) private isError$: Observable<boolean>;
  @select(n => n.session.get('isPending')) private isPending$: Observable<boolean>;
  @select(n => n.session.get('isLogged')) private isLogged$: Observable<boolean>;

  constructor(private sessionActions: SessionActions,
              private router: Router) {
    this.isLogged$.subscribe((result: boolean) => {
      if (result) {
        this.router.navigate(['/home']);
      }
    });
  }
}
