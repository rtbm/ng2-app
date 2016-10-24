import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'x-button',
  template: require('./button.component.html'),
  styles: [require('./button.component.scss')],
})

export class XButtonComponent {
  @Input() private preset: string = 'casual';
  @Input() private size: string = 'normal';
  @Input() private type: string = 'button';
  @Output() private onClick = new EventEmitter();
}
