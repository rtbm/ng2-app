import {Component} from '@angular/core';
import {WsHeaderComponent} from '../organisms/header-component';
import {WsBannerComponent} from '../templates/banner-component';

@Component({
    selector: 'ws-front-page',
    directives: [WsBannerComponent],
    template: `
        <ws-banner
            tagline="John Doe was here!"
            subtagline="Foo bar buzz"></ws-banner>
    `
})
export class WsFrontPageComponent {}
