import { Component, Output, EventEmitter } from '@angular/core';
import { XModalContentComponent, XModalMessageComponent, XModalActionsComponent } from '../modal';
import { XOverlayComponent } from '../overlay';
import { XButtonComponent } from '../button/button.component';

@Component({
  selector: 'x-dialog-confirm',
  directives: [XOverlayComponent, XModalContentComponent, XModalMessageComponent, XModalActionsComponent,
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
