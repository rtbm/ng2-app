import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { XMenuComponent } from '../menu/menu';
import { XMenuItemComponent } from '../menu/menu-item';
import { XIconComponent } from '../icon';

@Component({
  selector: 'x-aside-menu',
  directives: [ROUTER_DIRECTIVES, XMenuComponent, XMenuItemComponent, XIconComponent],
  template: `
    <x-menu>
      <x-menu-item>
        <a [routerLink]="['/']">
          <x-icon>home</x-icon>
        </a>
      </x-menu-item>
      <x-menu-item>
        <a [routerLink]="['/articles/create']">
          <x-icon>create</x-icon>
        </a>
      </x-menu-item>
      <x-menu-item>
        <a [routerLink]="['/articles']">
          <x-icon>list</x-icon>
        </a>
      </x-menu-item>
    </x-menu>
  `,
  styles: [`
    :host {           
      display: block;
      height: 100vh;
      background: #0b6190;
      width: 6rem;
    }
    
    :host x-menu {
      display: block;
    }
    
    :host x-menu-item {
      display: block;
      margin: 0;
    }
    
    :host x-menu-item a {
      color: #fff;
      display: block;
      padding: 2rem 0;
      text-transform: uppercase;
      
    }
    
    :host x-menu-item a:hover {
      background: #1672a5;
    }
  `],
})
export class XAsideMenuComponent {
}
