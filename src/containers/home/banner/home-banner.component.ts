import { Component } from '@angular/core';
import { XWrapperComponent } from '../../../components';

@Component({
  selector: 'x-banner',
  template: require('./home-banner.component.html'),
  styles: [require('./home-banner.component.scss')],
  directives: [XWrapperComponent],
})
export class QtHomeBannerComponent {
}
