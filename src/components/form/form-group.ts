import { Component } from '@angular/core';

@Component({
  selector: 'x-form-group',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
        display: block;
        margin: 0 0 1rem;
        padding: 0 2rem;        
    }
  `],
})
export class XFormGroupComponent {
}
