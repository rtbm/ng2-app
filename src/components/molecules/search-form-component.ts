import {Component} from '@angular/core';
import {XFormComponent} from '../atoms/form-component';
import {XLabelComponent} from '../atoms/label-component';
import {XInputComponent} from '../atoms/input-component';
import {XButtonComponent} from '../atoms/button-component';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators} from '@angular/common';

@Component({
    selector: 'x-search-form',
    directives: [FORM_DIRECTIVES, XFormComponent, XLabelComponent, XInputComponent, XButtonComponent],
    template: `
        <x-form [formModel]="searchForm" (onSubmit)="handleSubmit()">
            <x-label>Search</x-label>
            <x-input [formControl]="search" placeholder="search"></x-input>
            <x-button type="submit">Search</x-button>
        </x-form>
    `,
    styles: [`
        :host {
            display: inline-block;
        }
    `]
})
export class XSearchFormComponent {
    private searchForm: ControlGroup;
    private search: Control;

    constructor(private builder: FormBuilder) {
        this.search = new Control('', Validators.required);
        this.searchForm = this.builder.group({
            search: this.search
        });
    }

    handleSubmit() {
    }
}
