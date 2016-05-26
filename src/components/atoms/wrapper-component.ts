import {Component} from '@angular/core';

@Component({
    selector: 'ws-wrapper',
    template: `
        <ng-content></ng-content>
    `,
    styles: [`
        :host {
            display: block;
            margin: 0 auto;
            width: 100%;
            max-width: 120rem;
        }
    `]
})
export class WsWrapperComponent {}
