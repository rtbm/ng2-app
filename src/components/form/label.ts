import { Component } from '@angular/core';

@Component({
  selector: 'x-label',
  template: `
    <label>
      <ng-content></ng-content>
    </label>
  `,
  styles: [`
    :host {
      display: block;
      margin: 0 0 .5rem;
    }
  `],
})
export class XLabelComponent {
}
