import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {XMenuComponent} from '../atoms/menu-component';
import {XMenuItemComponent} from '../atoms/menu-item-component';

@Component({
    selector: 'x-top-menu',
    directives: [ROUTER_DIRECTIVES, XMenuComponent, XMenuItemComponent],
    template: `
        <x-menu>
            <x-menu-item><a [routerLink]="['./Home']">Home</a></x-menu-item>
            <x-menu-item><a [routerLink]="['./Signup']">Signup</a></x-menu-item>
        </x-menu>
    `
})
export class XTopMenuComponent {}
