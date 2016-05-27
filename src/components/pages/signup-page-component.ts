import {Component} from '@angular/core';
import {XSignupFormComponent} from '../molecules/signup-form-component';
import {SessionActions} from '../../actions/session';
import {XWrapperComponent} from '../atoms/ui/wrapper-component';
import {AsyncPipe} from '@angular/common';
import {select} from 'ng2-redux';
import {Observable} from 'rxjs';
import {Router} from '@angular/router-deprecated';

@Component({
    selector: 'x-signup-page',
    pipes: [AsyncPipe],
    directives: [XSignupFormComponent, XWrapperComponent],
    template: ` 
        <x-wrapper>
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

    constructor(
      private sessionActions: SessionActions,
      private router: Router
    ) {
        this.isLogged$.subscribe((result: boolean) => {
            if(result) {
                this.router.navigate(['Home']);
            }
        });
    }
}
