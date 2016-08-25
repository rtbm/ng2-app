import { Input, Component } from '@angular/core';
import { FormControl, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
  selector: 'x-form-input',
  directives: [REACTIVE_FORM_DIRECTIVES],
  template: require('./form-input.component.html'),
  styles: [require('./form-input.component.scss')],
})
export class XFormInputComponent {
  @Input() control: FormControl;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
}
