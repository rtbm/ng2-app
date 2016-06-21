import { Component, Input } from '@angular/core';

@Component({
  selector: 'x-form-message',
  template: require('./form-message.component.html'),
  styles: [require('./form-message.component.less')]
})
export class XFormMessageComponent {
  @Input() private preset = '';
}
