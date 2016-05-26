import {Input, Component} from '@angular/core';
import {NgFormControl} from '@angular/common';

@Component({
    selector: 'ws-input',
    template: `
        <input [ngFormControl]="formControl"
               [type]="type"
               [attr.placeholder]="placeholder" />
    `
})
export class WsInputComponent {
    @Input() type: string = 'text';
    @Input() placeholder: string = '';
    @Input() formControl: NgFormControl;
}
