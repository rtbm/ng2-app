import { Input, Component, EventEmitter, Output } from '@angular/core';
import { NgFormControl } from '@angular/common';

@Component({
  selector: 'x-form-input',
  template: require('./form-input.component.html'),
  styles: [require('./form-input.component.less')],
})
export class XFormInputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() formControl: NgFormControl;
  @Output() onKeyUp = new EventEmitter();
}
