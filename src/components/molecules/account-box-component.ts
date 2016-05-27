import {Component, Input, Output, EventEmitter} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {XButtonComponent} from '../atoms/form/button-component';
import {XListComponent} from '../atoms/list/list-component';
import {XListItemComponent} from '../atoms/list/list-item-component';

@Component({
  selector: 'x-account-box',
  directives: [XButtonComponent, XListComponent, XListItemComponent],
  pipes: [AsyncPipe],
  template: `
    <x-list>
        <x-list-item *ngIf="isLogged">{{email}}</x-list-item>
        <x-list-item *ngIf="!isLogged">
            <x-button (onClick)="onSignupClick.emit($event)">Signup</x-button>
        </x-list-item>
    </x-list>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class XAccountBoxComponent {
  @Input() private isLogged: boolean = false;
  @Input() private email: string = '';
  @Output() private onSignupClick = new EventEmitter();

  constructor() {}
}
