import { Component, Input } from '@angular/core';

@Component({
  selector: 'x-avatar',
  template: require('./avatar.component.html'),
  styles: [require('./avatar.component.scss')],
})
export class XAvatarComponent {
  @Input() private src;
}
