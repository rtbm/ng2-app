import {Component} from '@angular/core';

@Component({
    selector: 'x-menu-item',
    template: `
        <ng-content></ng-content>
    `,
    styles: [`
        :host {
            margin: 0 1rem;
        }
    `]
})
export class XMenuItemComponent {}
