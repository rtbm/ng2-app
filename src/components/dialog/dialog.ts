import { Component } from '@angular/core';
import { DialogRef } from '../../providers/dialog-ref';
import { XButtonComponent } from '../button/button';
import { XFormGroupComponent } from '../form/form-group';
import { XButtonsGroupComponent } from '../button/buttons-group';
import { XOverlayComponent } from '../overlay';
import { XDialogContentComponent } from './dialog-content';
import { XDialogMessageComponent } from './dialog-message';
import { XDialogActionsComponent } from './dialog-actions';

@Component({
  selector: 'x-dialog',
  directives: [XButtonComponent, XFormGroupComponent, XButtonsGroupComponent, XOverlayComponent, XDialogContentComponent,
    XDialogMessageComponent, XDialogActionsComponent],
  template: `
    <x-overlay>
      <x-dialog-content>
        <x-dialog-message>Are you sure?</x-dialog-message>
        <x-dialog-actions>
          <x-button size="big" preset="negative" (click)="dialogRef.reject()">No</x-button>
          <x-button size="big" preset="positive" (click)="dialogRef.resolve()">Yes</x-button>
        </x-dialog-actions>
      </x-dialog-content>
    </x-overlay>
  `,
  styles: [`
    :host x-button {
      min-width: 10rem;      
    }
    
    :host x-button button {
      width: 100%;
    }
  `]
})
export class XDialogComponent {
  constructor(private dialogRef: DialogRef) {
  }
}
