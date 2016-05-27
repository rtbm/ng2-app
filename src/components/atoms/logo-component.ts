import {Component} from '@angular/core';

@Component({
    selector: 'x-logo',
    template: `
        <div>RTBM</div>
    `,
    styles: [`
        :host {
            display: inline-block;
            font-weight: 900;
            font-size: 2.1rem;
        }
    `]
})
export class XLogoComponent {}
