import { Component } from '@angular/core';

@Component({
  selector: 'x-content',
  template: `<ng-content></ng-content>`,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class XContentComponent {}
