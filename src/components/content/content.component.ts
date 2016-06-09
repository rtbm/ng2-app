import { Component } from '@angular/core';

@Component({
  selector: 'x-content',
  template: `<ng-content></ng-content>`,
  styles: [require('./content.component.css')]
})
export class XContentComponent {}
