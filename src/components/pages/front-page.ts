import {Component} from '@angular/core';
import {XBannerComponent} from '../templates/banner';

@Component({
    selector: 'x-front-page',
    directives: [XBannerComponent],
    template: `
        <x-banner
            tagline="John Doe was here!"
            subtagline="Foo bar buzz"></x-banner>
    `
})
export class XFrontPageComponent {}
