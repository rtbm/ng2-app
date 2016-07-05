import { Component } from '@angular/core';
import { XWrapperComponent } from '../wrapper';

@Component({
  selector: 'x-banner',
  template: require('./banner.component.html'),
  styles: [require('./banner.component.less')],
  directives: [XWrapperComponent],
})
export class XBannerComponent {
}
