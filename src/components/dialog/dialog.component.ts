import { Component } from '@angular/core';
import { DialogRef } from '../../providers/dialog-ref';
import { XButtonComponent, XButtonsGroupComponent } from '../button';
import { XFormGroupComponent } from '../form';
import { XOverlayComponent } from '../overlay';
import { XDialogContentComponent } from './dialog-content.component';
import { XDialogMessageComponent } from './dialog-message.component';
import { XDialogActionsComponent } from './dialog-actions.component';

@Component({
  selector: 'x-dialog',
  directives: [XButtonComponent, XFormGroupComponent, XButtonsGroupComponent, XOverlayComponent, XDialogContentComponent,
    XDialogMessageComponent, XDialogActionsComponent],
  template: require('./dialog.component.html'),
  styles: [require('./dialog.component.less')]
})

export class XDialogComponent {
  constructor(private dialogRef: DialogRef) {
  }
}
