import { Input, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'x-form-checkbox',
  template: require('./form-checkbox.component.html'),
  styles: [require('./form-checkbox.component.scss')],
})
export class XFormCheckboxComponent {
  @Input() control: FormControl;
}
