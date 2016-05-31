import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {XMenuComponent} from "../atoms/menu/menu";
import {XMenuItemComponent} from "../atoms/menu/menu-item";

@Component({
  selector: 'x-aside-menu',
  directives: [ROUTER_DIRECTIVES, XMenuComponent, XMenuItemComponent],
  template: `
    <x-menu>
      <x-menu-item><a [routerLink]="['/home']">Home</a></x-menu-item>
      <x-menu-item><a [routerLink]="['/article/create']">Create article</a></x-menu-item>
      <x-menu-item><a [routerLink]="['/articles']">List articles</a></x-menu-item>
    </x-menu>
    `,
  styles: [`
    :host {           
      display: block;
      height: 100vh;
      background: #2D3E50;
      width: 8rem;
    }
    
    x-menu-item {
      display: block;  
    }
    
    x-menu-item a {
      display: block;
      color: #fff;
      height: 8rem;
    }
  `]
})
export class XAsideMenuComponent {
}
