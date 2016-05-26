import {Input, Output, Component, EventEmitter} from '@angular/core';

@Component({
    selector: 'ws-button',
    template: `
        <button [type]="type" (click)="handleClick($event)">
            <ng-content></ng-content>
        </button>
    `,
    styles: [`
        button {           
            outline: 0;
            padding: .5rem 1rem;
            background: #fff;
            border: .1rem solid #2D3E50;
            text-transform: uppercase;
            font-size: 1.2rem;
            font-weight: 500;
        }
    `]
})
export class WsButtonComponent {
    @Input() type: string = 'button';
    @Output() onClick = new EventEmitter<Event>();

    handleClick(event) {
        this.onClick.emit(event);
    }
}
