import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { XMenuComponent, XMenuItemComponent } from '../components/menu';
import { XIconComponent } from '../components/icon';

@Component({
  selector: 'x-aside-menu',
  directives: [ROUTER_DIRECTIVES, XMenuComponent, XMenuItemComponent, XIconComponent],
  template: require('./aside-menu.component.html'),
  styles: [require('./aside-menu.component.css')],
})
export class XAsideMenuComponent {
}
