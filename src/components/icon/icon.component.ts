import { Component, Input } from '@angular/core';

@Component({
  selector: 'x-icon',
  template: require('./icon.component.html'),
  styles: [require('./icon.component.scss')],
})
export class XIconComponent {
  @Input() preset: string = '';
}
