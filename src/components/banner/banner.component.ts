import { Component } from '@angular/core';
import { XWrapperComponent } from '../wrapper';

@Component({
  selector: 'x-banner',
  template: `
    <x-wrapper>
      <ng-content></ng-content>
    </x-wrapper>
  `,
  styles: [require('./banner.component.less')],
  directives: [XWrapperComponent],
})
export class XBannerComponent {
}
