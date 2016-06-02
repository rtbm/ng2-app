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
    }
  `],
})
export class XLabelComponent {
}
