import { Component } from '@angular/core';

@Component({
  selector: 'x-overlay',
  template: `
    <ng-content></ng-content>
  `,
  styles: [require('./overlay.component.less')],
})
export class XOverlayComponent {
  constructor() {
  }
}
