import { Component } from '@angular/core';

@Component({
  selector: 'x-form-message',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: block;
      margin: 0 2rem 1.5rem 2rem;
      color: #737373;
    }
  `]
})

export class XFormMessageComponent {}
