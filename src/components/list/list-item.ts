import { Component } from '@angular/core';

@Component({
  selector: 'x-list-item',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class XListItemComponent {
}
