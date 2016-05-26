import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {WsMenuComponent} from '../atoms/menu-component';
import {WsMenuItemComponent} from '../atoms/menu-item-component';

@Component({
    selector: 'ws-top-menu',
    directives: [ROUTER_DIRECTIVES, WsMenuComponent, WsMenuItemComponent],
    template: `
        <ws-menu>
            <ws-menu-item><a [routerLink]="['./Home']">Home</a></ws-menu-item>
            <ws-menu-item><a [routerLink]="['./Signup']">Signup</a></ws-menu-item>
        </ws-menu>
    `
})
export class WsTopMenuComponent {}
