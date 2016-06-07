import { Component } from '@angular/core';

@Component({
  selector: 'x-menu',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class XMenuComponent {
}
