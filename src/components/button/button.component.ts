import { Input, Component } from '@angular/core';

@Component({
  selector: 'x-button',
  template: require('./button.component.html'),
  styles: [require('./button.component.less')],
})

export class XButtonComponent {
  @Input() preset: string = '';
  @Input() size: string = '';
}
