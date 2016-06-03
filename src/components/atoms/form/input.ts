import { Input, Component, EventEmitter, Output, ElementRef } from '@angular/core';
import { NgFormControl } from '@angular/common';

@Component({
  selector: 'x-input',
  template: `
    <input [ngFormControl]="formControl"
           [type]="type"
           [attr.placeholder]="placeholder"
           (keyup)="onKeyUp.emit($event)" />
  `,
  styles: [`
    input {
      border: 0 none;
      border-bottom: .1rem solid #afafaf;
      padding: .75rem 0;
      outline: 0;
      width: 100%;
      box-sizing: border-box;
    }
    
    input:focus {
      border: 0 none;
      border-bottom: .1rem solid #111;
    }
  `],
})
export class XInputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() formControl: NgFormControl;
  @Output() onKeyUp = new EventEmitter();
}
