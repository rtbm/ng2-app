import { Component } from '@angular/core';

@Component({
  selector: 'x-dialog-message',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: block;
      padding: 2rem;
      font-size: 1.6rem;
    }
  `],
})
export class XDialogMessageComponent {
  constructor() {
  }
}
