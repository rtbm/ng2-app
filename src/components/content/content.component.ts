import { Component } from '@angular/core';

@Component({
  selector: 'x-content',
  template: `<ng-content></ng-content>`,
  styles: [require('./content.component.less')]
})
export class XContentComponent {}
