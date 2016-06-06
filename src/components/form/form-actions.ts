import { Component } from '@angular/core';

@Component({
  selector: 'x-form-actions',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: block;
      background: #efefef;
      text-align: center;
      padding: 1.5rem 2rem;
      margin: 1.5rem 0 0;
    }
  `],
})
export class XFormActionsComponent {
}
