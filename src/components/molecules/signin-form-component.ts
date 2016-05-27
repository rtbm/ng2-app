import {Component, Output, EventEmitter} from '@angular/core';
import {XFormComponent} from '../atoms/form/form-component';
import {XLabelComponent} from '../atoms/form/label-component';
import {XButtonComponent} from '../atoms/form/button-component';
import {XInputComponent} from '../atoms/form/input-component';
import {XFormGroupComponent} from '../atoms/form/form-group-component';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators} from '@angular/common';

@Component({
    selector: 'x-signin-form',
    directives: [FORM_DIRECTIVES, XFormComponent, XLabelComponent, XButtonComponent, XInputComponent,
        XFormGroupComponent],
    template: `
        <x-form [formModel]="form" (onSubmit)="handleSubmit($event)">
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
export class XSigninFormComponent {
    @Output() onSubmit = new EventEmitter<Event>();

    private form: ControlGroup;
    private email: Control;
    private password: Control;

    constructor(private builder: FormBuilder) {
        this.email = new Control('', Validators.required);
        this.password = new Control('', Validators.required);

        this.form = this.builder.group({
            email: this.email,
            password: this.password
        });
    }

    handleSubmit() {
        this.onSubmit.emit(this.form.value);
    }
}
