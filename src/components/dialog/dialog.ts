import { Component } from '@angular/core';

@Component({
  selector: 'x-dialog',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .8);
    }
  `],
})
export class XDialogComponent {
  constructor() {
  }
}
