import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'x-abstract-button',
  template: require('./abstract-button.component.html'),
  styles: [require('./button.component.scss')],
})

export class XAbstractButtonComponent {
  @Input() private preset: string = 'casual';
  @Input() private size: string = 'normal';
}
