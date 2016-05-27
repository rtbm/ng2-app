import {Input, Component} from '@angular/core';
import {NgFormControl} from '@angular/common';

@Component({
    selector: 'x-input',
    template: `
        <input [ngFormControl]="formControl"
               [type]="type"
               [attr.placeholder]="placeholder" />
    `
})
export class XInputComponent {
    @Input() type: string = 'text';
    @Input() placeholder: string = '';
    @Input() formControl: NgFormControl;
}
