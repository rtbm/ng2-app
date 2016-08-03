import { Input, Component } from '@angular/core';
import { FormControl, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
  selector: 'x-form-checkbox',
  directives: [REACTIVE_FORM_DIRECTIVES],
  template: require('./form-checkbox.component.html'),
  styles: [require('./form-checkbox.component.scss')],
})
export class XFormCheckboxComponent {
  @Input() control: FormControl;
}
