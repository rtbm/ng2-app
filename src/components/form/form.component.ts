import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'x-form',
  template: require('./form.component.html'),
  styles: [require('./form.component.scss')],
})
export class XFormComponent {
  @Input() group: FormGroup;
  @Output() onSubmit = new EventEmitter();
}
