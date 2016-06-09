import { Component } from '@angular/core';

@Component({
  selector: 'x-icon',
  template: `
    <span class="material-icons"><ng-content></ng-content></span>
  `,
  styles: [require('./icon.component.less')]
})
export class XIconComponent {}
