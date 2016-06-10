import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { XLogoComponent } from '../../components/logo';
import { QtAccountBoxComponent } from '../account';
import { XWrapperComponent } from '../../components/wrapper';
import { XMenuItemComponent, XMenuComponent } from '../../components/menu';

@Component({
  selector: 'qt-header',
  directives: [ROUTER_DIRECTIVES, XWrapperComponent, XLogoComponent, QtAccountBoxComponent, XMenuComponent,
    XMenuItemComponent],
  pipes: [AsyncPipe],
  template: require('./header.component.html'),
  styles: [require('./header.component.less')],
})
export class QtHeaderComponent {
}
