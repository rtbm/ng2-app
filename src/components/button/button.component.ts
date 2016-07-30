import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'x-button',
  template: require('./button.component.html'),
  styles: [require('./button.component.scss')],
})

export class XButtonComponent {
  @Input() preset: string = 'casual';
  @Input() size: string = 'normal';
  @Input() type: string = 'button';
  @Output() private onClick = new EventEmitter();
}
