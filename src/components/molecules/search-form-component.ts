import {Component, Output, EventEmitter} from '@angular/core';
import {XFormComponent} from '../atoms/form/form-component';
import {XLabelComponent} from '../atoms/form/label-component';
import {XInputComponent} from '../atoms/form/input-component';
import {XButtonComponent} from '../atoms/form/button-component';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators} from '@angular/common';

@Component({
    selector: 'x-search-form',
    directives: [FORM_DIRECTIVES, XFormComponent, XLabelComponent, XInputComponent, XButtonComponent],
    template: `
        <x-form [formModel]="form" (onSubmit)="handleSubmit()">
            <x-label>Search</x-label>
            <x-input [formControl]="search" placeholder="search"></x-input>
            <x-button type="submit">Search</x-button>
        </x-form>
    `,
    styles: [`
        :host {
            display: inline-block;
        }
        x-label {
            display: inline-block;
        }
    `]
})
export class XSearchFormComponent {
    @Output() onSubmit = new EventEmitter();

    private form: ControlGroup;
    private search: Control;

    constructor(private builder: FormBuilder) {
        this.search = new Control('', Validators.required);
        this.form = this.builder.group({
            search: this.search
        });
    }

    handleSubmit() {
        this.onSubmit.emit(this.form.value);
    }
}
