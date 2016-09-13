import { Input, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'x-form-input',
  template: require('./form-input.component.html'),
  styles: [require('./form-input.component.scss')],
})
export class XFormInputComponent {
  @Input() control: FormControl;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
}
