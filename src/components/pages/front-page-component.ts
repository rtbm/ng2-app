import {Component} from '@angular/core';
import {XHeaderComponent} from '../organisms/header-component';
import {XBannerComponent} from '../templates/banner-component';

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
