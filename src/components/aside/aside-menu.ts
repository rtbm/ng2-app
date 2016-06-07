import { Component, Input } from '@angular/core';
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
        <a [routerLink]="['/account/dashboard']">
          <x-icon>dashboard</x-icon>
        </a>
      </x-menu-item>
      <x-menu-item>
        <a [routerLink]="['/account/articles/create']">
          <x-icon>create</x-icon>
        </a>
      </x-menu-item>
      <x-menu-item>
        <a [routerLink]="['/account/articles']">
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
      position: fixed;
      top: 0;
      left: 0;
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
