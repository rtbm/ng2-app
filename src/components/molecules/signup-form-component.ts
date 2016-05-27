import {Component, Output, EventEmitter} from '@angular/core';
import {XFormComponent} from '../atoms/form-component';
import {XLabelComponent} from '../atoms/label-component';
import {XButtonComponent} from '../atoms/button-component';
import {XInputComponent} from '../atoms/input-component';
import {XFormGroupComponent} from '../atoms/form-group-component';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators} from '@angular/common';

@Component({
    selector: 'x-signup-form',
    directives: [FORM_DIRECTIVES, XFormComponent, XLabelComponent, XButtonComponent, XInputComponent,
        XFormGroupComponent],
    template: `
        <x-form [formModel]="signupForm" (onSubmit)="handleSubmit($event)">
            <x-form-group>
                <x-label>E-mail</x-label>
                <x-input [formControl]="email" type="email"></x-input>
            </x-form-group>
            <x-form-group>
                <x-label>Password</x-label>
                <x-input [formControl]="password" type="password"></x-input>
            </x-form-group>
            <x-button type="submit">Signup</x-button>
        </x-form>
    `
})
export class XSignupFormComponent {
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
