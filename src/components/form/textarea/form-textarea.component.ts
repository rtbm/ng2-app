import { Input, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'x-form-textarea',
  template: require('./form-textarea.component.html'),
  styles: [require('./form-textarea.component.scss')],
})
export class XFormTextareaComponent {
  @Input() placeholder: string = '';
  @Input() control: FormControl;
}
