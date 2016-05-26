import {Component, Output, EventEmitter} from '@angular/core';
import {WsFormComponent} from '../atoms/form-component';
import {WsLabelComponent} from '../atoms/label-component';
import {WsButtonComponent} from '../atoms/button-component';
import {WsInputComponent} from '../atoms/input-component';
import {WsFormGroupComponent} from '../atoms/form-group-component';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators} from '@angular/common';

@Component({
    selector: 'ws-signup-form',
    directives: [FORM_DIRECTIVES, WsFormComponent, WsLabelComponent, WsButtonComponent, WsInputComponent,
        WsFormGroupComponent],
    template: `
        <ws-form [formModel]="signupForm" (onSubmit)="handleSubmit($event)">
            <ws-form-group>
                <ws-label>E-mail</ws-label>
                <ws-input [formControl]="email" type="email"></ws-input>
            </ws-form-group>
            <ws-form-group>
                <ws-label>Password</ws-label>
                <ws-input [formControl]="password" type="password"></ws-input>
            </ws-form-group>
            <ws-button type="submit">Signup</ws-button>
        </ws-form>
    `
})
export class WsSignupFormComponent {
    private signupForm: ControlGroup;
    private email: Control;
    private password: Control;
    @Output() onSubmit = new EventEmitter<Event>();

    constructor(private builder: FormBuilder) {
        this.email = new Control('', Validators.required);
        this.password = new Control('', Validators.required);

        this.signupForm = this.builder.group({
            email: this.email,
            password: this.password
        });
    }

    handleSubmit() {
        this.onSubmit.emit(this.signupForm.value);
    }
}
