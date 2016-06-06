import { Component } from '@angular/core';

@Component({
  selector: 'x-dialog-content',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      background: #fff;
      display: inline-block;
      text-align: center;
    }
  `],
})
export class XDialogContentComponent {
  constructor() {
  }
}
