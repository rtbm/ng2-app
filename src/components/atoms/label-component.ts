import {Input, Component} from '@angular/core';

@Component({
    selector: 'ws-label',
    template: `
        <label>
            <ng-content></ng-content>
        </label>
    `,
    styles: [`
        :host {
            display: block;
        }
    `]
})
export class WsLabelComponent {}
