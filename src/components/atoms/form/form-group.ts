import { Component } from '@angular/core';

@Component({
  selector: 'x-form-group',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
        display: block;
        margin: 0 0 1.5rem;
        padding: 1rem 3rem;        
    }    
  `],
})
export class XFormGroupComponent {
}
