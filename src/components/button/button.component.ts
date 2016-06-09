import { Input, Output, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'x-button',
  template: require('./button.component.html'),
  styles: [require('./button.component.css')],
})

export class XButtonComponent {
  @Input() type: string = 'button';
  @Input() preset: string = '';
  @Input() size: string = '';
  @Output() onClick = new EventEmitter<Event>();

  handleClick(event) {
    this.onClick.emit(event);
  }
}
