import { Input, Component } from '@angular/core';
import { NgFormControl } from '@angular/common';

@Component({
  selector: 'x-form-textarea',
  template: require('./form-textarea.component.html'),
  styles: [require('./form-textarea.component.css')],
})
export class XTextareaComponent {
  @Input() placeholder: string = '';
  @Input() formControl: NgFormControl;
}
