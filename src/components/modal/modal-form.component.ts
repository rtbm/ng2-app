import { Component } from '@angular/core';
import { XOverlayComponent } from '../overlay/overlay.component';
import { XModalContentComponent } from './modal-content.component';

@Component({
  selector: 'x-modal-form',
  template: require('./modal-form.component.html'),
  styles: [require('./modal-form.component.less')],
  directives: [XOverlayComponent, XModalContentComponent],
})

export class XModalFormComponent {
}
