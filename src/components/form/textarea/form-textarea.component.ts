import { Input, Component } from '@angular/core';
import { FormControl, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
  selector: 'x-form-textarea',
  directives: [REACTIVE_FORM_DIRECTIVES],
  template: require('./form-textarea.component.html'),
  styles: [require('./form-textarea.component.scss')],
})
export class XFormTextareaComponent {
  @Input() placeholder: string = '';
  @Input() control: FormControl;
}
