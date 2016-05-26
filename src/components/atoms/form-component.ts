import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgFormModel} from '@angular/common';

@Component({
    selector: 'ws-form',
    directives: [NgFormModel],
    template: `
        <form [ngFormModel]="formModel" (ngSubmit)="onSubmit.emit($event)">
            <ng-content></ng-content>
        </form>
    `
})
export class WsFormComponent {
    @Input() formModel: NgFormModel;
    @Output() onSubmit = new EventEmitter<Event>();
}
