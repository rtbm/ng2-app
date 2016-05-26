import {Component} from '@angular/core';
import {WsSignupFormComponent} from '../molecules/signup-form-component';
import {SessionActions} from '../../actions/session';
import {WsWrapperComponent} from '../atoms/wrapper-component';

@Component({
    selector: 'ws-signup-page',
    directives: [WsSignupFormComponent, WsWrapperComponent],
    template: `
        <ws-wrapper>
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
    constructor(private sessionActions: SessionActions) {}
}
