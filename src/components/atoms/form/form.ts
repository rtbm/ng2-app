import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NgFormModel } from '@angular/common';

@Component({
  selector: 'x-form',
  directives: [NgFormModel],
  template: `
    <form [ngFormModel]="formModel" (ngSubmit)="onSubmit.emit($event)">
      <ng-content></ng-content>
    </form>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class XFormComponent {
  @Input() formModel: NgFormModel;
  @Output() onSubmit = new EventEmitter<Event>();
}
