import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'x-list-item-content',
  template: require('./list-item-content.component.html'),
  styles: [require('./list-item-content.component.less')]
})
export class XListItemContentComponent {
  @Output() onClick = new EventEmitter();
}
