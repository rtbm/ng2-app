import { Component, Input } from '@angular/core';

@Component({
  selector: 'x-tab',
  template: require('./tab.component.html'),
  styles: [require('./tab.component.scss')],
})
export class XTabComponent {
  @Input() private active = false;
}
