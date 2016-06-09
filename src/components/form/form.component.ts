import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFormModel } from '@angular/common';

@Component({
  selector: 'x-form',
  directives: [NgFormModel],
  template: require('./form.component.html'),
  styles: [require('./form.component.css')]
})
export class XFormComponent {
  @Input() formModel: NgFormModel;
  @Output() onSubmit = new EventEmitter<Event>();
}
