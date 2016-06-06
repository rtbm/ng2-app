import { Component } from '@angular/core';

@Component({
  selector: 'x-form-header',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: block;
      padding: 1.5rem 2rem;
    }
  `],
})
export class XFormHeaderComponent {
}
