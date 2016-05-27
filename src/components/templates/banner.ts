import {Component, Input} from '@angular/core';
import {XWrapperComponent} from '../atoms/ui/wrapper';

@Component({
    selector: 'x-banner',
    directives: [XWrapperComponent],
    template: `
        <x-wrapper>
            <h1>{{tagline}}</h1>
            <h2>{{subtagline}}</h2>
        </x-wrapper>
    `,
    styles: [`
        :host {
            background: #2D3E50;
            height: 30rem;
            display: flex;
            align-items: center;
            text-align: center;
            color: white;
            width: 100%;
        }
        :host h1,
        :host h2 {
            margin: 0;
            padding: 0;
        }
        :host h1 {
            font: 4.8rem/1.2em sans-serif;
            font-weight: 900;
        }
        :host h2 {
            font: 3.6rem/1.2em sans-serif;
            font-weight: 700;
        }
    `]
})
export class XBannerComponent {
    @Input() tagline: string = '';
    @Input() subtagline: string = '';
}
