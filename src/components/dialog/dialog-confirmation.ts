import { Component } from '@angular/core';
import { DialogRef } from '../../providers/dialog-ref';
import { XButtonComponent } from '../button/button';
import { XFormGroupComponent } from '../form/form-group';
import { XButtonsGroupComponent } from '../button/buttons-group';
import { XDialogComponent } from './dialog';
import { XDialogContentComponent } from './dialog-content';
import { XDialogMessageComponent } from './dialog-message';
import { XDialogActionsComponent } from './dialog-actions';

@Component({
  selector: 'x-dialog-confirmation',
  directives: [XButtonComponent, XFormGroupComponent, XButtonsGroupComponent, XDialogComponent, XDialogContentComponent,
    XDialogMessageComponent, XDialogActionsComponent],
  template: `
    <x-dialog>
      <x-dialog-content>
        <x-dialog-message>Are you sure?</x-dialog-message>
        <x-dialog-actions>
          <x-button size="big" preset="negative" (click)="dialogRef.reject()">No</x-button>
          <x-button size="big" preset="positive" (click)="dialogRef.resolve()">Yes</x-button>
        </x-dialog-actions>
      </x-dialog-content>
    </x-dialog>
  `,
})
export class XDialogConfirmationComponent {
  constructor(private dialogRef: DialogRef) {
  }
}
