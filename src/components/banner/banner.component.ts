import { Component } from '@angular/core';
import { XWrapperComponent } from '../wrapper';

@Component({
  selector: 'x-banner',
  directives: [XWrapperComponent],
  template: `
    <x-wrapper>
      <ng-content></ng-content>
    </x-wrapper>
  `,
  styles: [require('./banner.component.less')],
})
export class XBannerComponent {
}
