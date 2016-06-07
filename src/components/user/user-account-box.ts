import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { SessionActions } from '../../actions/session';
import { XButtonComponent } from '../button/button';
import { XMenuComponent } from '../menu/menu';
import { XMenuItemComponent } from '../menu/menu-item';

@Component({
  selector: 'x-user-account-box',
  directives: [XButtonComponent, XMenuComponent, XMenuItemComponent],
  pipes: [AsyncPipe],
  template: `
    <x-menu *ngIf="isLogged">
      <x-menu-item>
        <div class="email">{{email}}</div>       
      </x-menu-item>
      <x-menu-item>
        <x-button (onClick)="handleLogoutClick()">Logout</x-button>
      </x-menu-item>
    </x-menu>
    
    <x-menu *ngIf="!isLogged">
      <x-menu-item>
        <x-button (onClick)="onSigninClick.emit($event)">Sign in</x-button>
      </x-menu-item>
      <x-menu-item>
        <x-button (onClick)="onSignupClick.emit($event)">Sign up</x-button>
      </x-menu-item>
    </x-menu>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `],
})
export class XUserAccountBoxComponent {
  @Input() private isLogged: boolean = false;
  @Input() private email: string = '';
  @Output() private onSigninClick = new EventEmitter();
  @Output() private onSignupClick = new EventEmitter();

  constructor(private sessionActions: SessionActions,
              private router: Router) {
  }

  handleLogoutClick() {
    this.sessionActions.logout();
    this.router.navigate(['/']);
  }
}
