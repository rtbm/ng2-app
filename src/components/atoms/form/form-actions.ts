import { Component } from '@angular/core';

@Component({
  selector: 'x-form-actions',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: block;
      background: #292929;
      text-align: center;
      padding: 1.5rem 3rem;
    }
  `],
})
export class XFormActionsComponent {
}
