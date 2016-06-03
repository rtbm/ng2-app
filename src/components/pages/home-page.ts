import { Component } from '@angular/core';
import { XBannerComponent } from '../templates/banner';
import { XHeaderComponent } from '../organisms/header';

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
