import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { SessionActions } from '../../actions/session';
import { XButtonComponent } from '../button/button';
import { XListComponent } from '../list/list';
import { XListItemComponent } from '../list/list-item';

@Component({
  selector: 'x-account-box',
  directives: [XButtonComponent, XListComponent, XListItemComponent],
  pipes: [AsyncPipe],
  template: `
    <x-list>
      <x-list-item *ngIf="isLogged">
        <div class="email">{{email}}</div>
        <x-button (onClick)="handleLogoutClick()">Logout</x-button>
      </x-list-item>
      <x-list-item *ngIf="!isLogged">
        <x-button (onClick)="onSigninClick.emit($event)">Signin</x-button>
        <x-button (onClick)="onSignupClick.emit($event)">Signup</x-button>
      </x-list-item>
    </x-list>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
    
    .email, x-button {
      display: inline-block;
    }
    
    .email {
      margin: 0 2rem 0;
    }
  `],
})
export class XAccountBoxComponent {
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
