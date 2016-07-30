import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { XMenuComponent, XMenuItemComponent, XIconComponent } from '../../../components';

@Component({
  selector: 'qt-account-aside-menu',
  template: require('./account-aside-menu.component.html'),
  styles: [require('./account-aside-menu.component.scss')],
  directives: [ROUTER_DIRECTIVES, XMenuComponent, XMenuItemComponent, XIconComponent],
})
export class QtAccountAsideMenuComponent {
}
