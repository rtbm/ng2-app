import { Component, Input, Output, EventEmitter } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup } from '@angular/forms';

@Component({
  selector: 'x-form',
  directives: [REACTIVE_FORM_DIRECTIVES],
  template: require('./form.component.html'),
  styles: [require('./form.component.less')],
})
export class XFormComponent {
  @Input() group: FormGroup;
  @Output() onSubmit = new EventEmitter();
}
