import { Component } from '@angular/core';

@Component({
  selector: 'x-dialog-actions',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      background: #efefef;
      border-top: .1rem solid #d2d2d2;
      display: block;
      padding: 1rem 2rem;
    }
  `],
})
export class XDialogActionsComponent {
  constructor() {
  }
}
