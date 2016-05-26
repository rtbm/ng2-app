import {Component} from '@angular/core';
import {WsFormComponent} from '../atoms/form-component';
import {WsLabelComponent} from '../atoms/label-component';
import {WsInputComponent} from '../atoms/input-component';
import {WsButtonComponent} from '../atoms/button-component';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators} from '@angular/common';

@Component({
    selector: 'ws-search-form',
    directives: [FORM_DIRECTIVES, WsFormComponent, WsLabelComponent, WsInputComponent, WsButtonComponent],
    template: `
        <ws-form [formModel]="searchForm" (onSubmit)="handleSubmit()">
            <ws-label>Search</ws-label>
            <ws-input [formControl]="search" placeholder="search"></ws-input>
            <ws-button type="submit">Search</ws-button>
        </ws-form>
    `,
    styles: [`
        :host {
            display: inline-block;
        }
    `]
})
export class WsSearchFormComponent {
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
