import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'x-button',
  template: require('./button.component.html'),
  styles: [require('./button.component.less')],
})

export class XButtonComponent {
  @Input() preset: string = 'casual';
  @Input() size: string = 'normal';
  @Input() type: string = 'button';
  @Output() private onClick = new EventEmitter();
}
