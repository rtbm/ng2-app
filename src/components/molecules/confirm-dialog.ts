import {Component} from '@angular/core';
import {DialogRef} from '../../providers/dialog-ref';
import {XButtonComponent} from '../atoms/form/button';
import {XFormGroupComponent} from "../atoms/form/form-group";

@Component({
    selector: 'x-dialog',
    directives: [XButtonComponent, XFormGroupComponent],
    template: `
        <div class="dialog">
            <p>Are you sure?</p>
            <x-button (click)="dialogRef.resolve()">Yes</x-button>
            <x-button (click)="dialogRef.reject()">No</x-button>
        </div>
    `,
    styles: [`
        :host {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .8);
        }
        
        p {
            margin: 0 0 2rem;
        }
        
        .dialog {
            background: #fff;
            display: inline-block;
            padding: 2rem;
            text-align: center;
        }
    `]
})
export class XDialogComponent {
    constructor(private dialogRef: DialogRef){}
}
