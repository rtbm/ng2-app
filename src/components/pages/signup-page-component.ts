import {Component} from '@angular/core';
import {WsSignupFormComponent} from '../molecules/signup-form-component';
import {SessionActions} from '../../actions/session';
import {WsWrapperComponent} from '../atoms/wrapper-component';
import {AsyncPipe} from '@angular/common';
import {select} from 'ng2-redux';
import {Observable} from 'rxjs';

@Component({
    selector: 'ws-signup-page',
    pipes: [AsyncPipe],
    directives: [WsSignupFormComponent, WsWrapperComponent],
    template: ` 
        <ws-wrapper>
            <div>isError: {{ isError$ | async }}</div>
            <div>isPending: {{ isPending$ | async }}</div>
            
            <ws-signup-form (onSubmit)="sessionActions.signup($event)"></ws-signup-form>
        </ws-wrapper>
    `,
    styles: [`
        ws-signup-form {
            display: inline-block;
            background: #D6DCE2;
            padding: 2rem;
        }
    `]
})
export class WsSignupPageComponent {
    @select(n => n.session.get('isError')) private isError$: Observable<boolean>;
    @select(n => n.session.get('isPending')) private isPending$: Observable<boolean>;
    @select(n => n.session.get('isLogged')) private isLogged$: Observable<boolean>;

    constructor(private sessionActions: SessionActions) {
        this.isLogged$.subscribe((result) => {
            if(result) {
                alert('Yayy!!1 U\'re signed up!! ^^');
            }
        })
    }
}
