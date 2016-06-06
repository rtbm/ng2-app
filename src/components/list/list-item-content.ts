import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'x-list-item-content',
  template: `
    <div (click)="onClick.emit($event)">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class XListItemContentComponent {
  @Output() onClick = new EventEmitter();
}
