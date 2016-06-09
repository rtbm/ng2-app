import { Component, Input } from '@angular/core';
import { XWrapperComponent } from '../wrapper';

@Component({
  selector: 'x-banner',
  directives: [XWrapperComponent],
  template: `
    <x-wrapper>
      <h1>{{tagline}}</h1>
      <h2>{{subtagline}}</h2>
    </x-wrapper>
  `,
  styles: [require('./banner.component.css')],
})
export class XBannerComponent {
  @Input() tagline: string = '';
  @Input() subtagline: string = '';
}
