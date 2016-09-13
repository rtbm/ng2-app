import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'x-dialog-confirm',
  template: require('./dialog-confirm.component.html'),
  styles: [require('./dialog-confirm.component.scss')],
})
export class XDialogConfirmComponent {
  @Output() onConfirm = new EventEmitter();
  @Output() onCancel = new EventEmitter();
}
