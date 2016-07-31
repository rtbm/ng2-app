import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'x-logo',
  template: require('./logo.component.html'),
  styles: [require('./logo.component.scss')],
  directives: [ROUTER_DIRECTIVES],
})
export class XLogoComponent {
}
