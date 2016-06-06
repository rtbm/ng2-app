import { Component } from '@angular/core';
import { XBannerComponent } from '../components/banner';
import { XHeaderComponent } from '../components/header';

@Component({
  selector: 'x-home-page',
  directives: [XBannerComponent, XHeaderComponent],
  template: `
    <x-header></x-header>
    <x-banner tagline="John Doe was here!"
              subtagline="Foo bar buzz"></x-banner>
  `,
})
export class XHomePageComponent {
}
