import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {XMenuComponent} from "../atoms/menu/menu";
import {XMenuItemComponent} from "../atoms/menu/menu-item";

@Component({
  selector: 'x-top-menu',
  directives: [ROUTER_DIRECTIVES, XMenuComponent, XMenuItemComponent],
  template: `
    <x-menu>
      <x-menu-item><a [routerLink]="['/']">Home</a></x-menu-item>
    </x-menu>
  `,
})
export class XTopMenuComponent {
}
