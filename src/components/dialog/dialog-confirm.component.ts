import { Component, Output, EventEmitter } from '@angular/core';
import { XDialogContentComponent } from './dialog-content.component';
import { XDialogMessageComponent } from './dialog-message.component';
import { XDialogActionsComponent } from './dialog-actions.component';
import { XOverlayComponent } from '../overlay';
import { XButtonComponent } from '../button/button.component';

@Component({
  selector: 'x-dialog-confirm',
  directives: [XOverlayComponent, XDialogContentComponent, XDialogMessageComponent, XDialogActionsComponent,
    XButtonComponent],
  template: require('./dialog-confirm.component.html'),
  styles: [require('./dialog-confirm.component.less')]
})
export class XDialogConfirmComponent {
  @Output() onConfirm = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  constructor() {
  }
}
