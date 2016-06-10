import { Component } from '@angular/core';
import { XBannerComponent } from '../../components/banner';
import { QtHeaderComponent } from '../header';

@Component({
  selector: 'qt-home-page',
  directives: [XBannerComponent, QtHeaderComponent],
  template: require('./home-page.component.html'),
})
export class QtHomePageComponent {
}
