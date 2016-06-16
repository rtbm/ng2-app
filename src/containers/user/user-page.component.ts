import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { QtHeaderComponent } from '../header';

@Component({
  selector: 'x-user-page',
  directives: [ROUTER_DIRECTIVES, QtHeaderComponent],
  template: require('./user-page.component.html'),
})

export class QtUserPageComponent {
}
