import { Component } from '@angular/core';
import { XBannerComponent } from '../components/banner';
import { XHeaderComponent } from '../components/header';

@Component({
  selector: 'x-home-page',
  directives: [XBannerComponent, XHeaderComponent],
  template: require('./home-page.component.html'),
})
export class XHomePageComponent {
}
