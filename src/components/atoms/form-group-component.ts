import {Component} from '@angular/core';

@Component({
    selector: 'ws-form-group',
    template: `
        <ng-content></ng-content>
    `,
    styles: [`
        :host {
            display: block;
            margin: 0 0 1.5rem;
        }
    `]
})
export class WsFormGroupComponent {}
