import {Component} from '@angular/core';
import {WsWrapperComponent} from '../atoms/wrapper-component';
import {WsLogoComponent} from '../atoms/logo-component';
import {WsSearchFormComponent} from '../molecules/search-form-component';
import {WsTopMenuComponent} from '../molecules/top-menu-component';

@Component({
    selector: 'ws-header',
    directives: [WsWrapperComponent, WsLogoComponent, WsSearchFormComponent, WsTopMenuComponent],
    template: `
        <ws-wrapper>
            <ws-logo></ws-logo>
            <ws-top-menu></ws-top-menu>
            <ws-search-form></ws-search-form>
        </ws-wrapper>
    `,
    styles: [`
        :host {       
            padding: 1rem 0;
            display: block;
            background: #fff;
        }
        ws-logo {
            margin: 0 3rem 0;
        }
        ws-search-form {
            float: right;
        }
    `]
})
export class WsHeaderComponent {}
