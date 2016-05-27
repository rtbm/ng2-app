import {Input, Component} from '@angular/core';
import {NgFormControl} from '@angular/common';

@Component({
    selector: 'x-input',
    template: `
        <input [ngFormControl]="formControl"
               [type]="type"
               [attr.placeholder]="placeholder" />
    `,
    styles: [`
        input {
            border: 1px solid #d9d9d9;
            padding: 1rem;
            outline: 0;
        }
        input:focus {
            border: 1px solid #111;
        }
    `]
})
export class XInputComponent {
    @Input() type: string = 'text';
    @Input() placeholder: string = '';
    @Input() formControl: NgFormControl;
}
