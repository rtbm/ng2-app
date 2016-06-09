import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'x-list-item-content',
  template: require('./list-item-actions.component.html'),
  styles: [require('./list-item-actions.component.css')]
})
export class XListItemContentComponent {
  @Output() onClick = new EventEmitter();
}
