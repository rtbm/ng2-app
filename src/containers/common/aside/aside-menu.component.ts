import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { XMenuComponent, XMenuItemComponent, XIconComponent } from '../../../components';

@Component({
  selector: 'qt-aside-menu',
  template: require('./aside-menu.component.html'),
  styles: [require('./aside-menu.component.less')],
  directives: [ROUTER_DIRECTIVES, XMenuComponent, XMenuItemComponent, XIconComponent],
})
export class QtAsideMenuComponent {
}
