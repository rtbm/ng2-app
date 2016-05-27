import {Component} from '@angular/core';
import {XWrapperComponent} from '../atoms/wrapper-component';
import {XLogoComponent} from '../atoms/logo-component';
import {XSearchFormComponent} from '../molecules/search-form-component';
import {XTopMenuComponent} from '../molecules/top-menu-component';

@Component({
    selector: 'x-header',
    directives: [XWrapperComponent, XLogoComponent, XSearchFormComponent, XTopMenuComponent],
    template: `
        <x-wrapper>
            <x-logo></x-logo>
            <x-top-menu></x-top-menu>
            <x-search-form></x-search-form>
        </x-wrapper>
    `,
    styles: [`
        :host {       
            padding: 1rem 0;
            display: block;
            background: #fff;
        }
        x-logo {
            margin: 0 3rem 0;
        }
        x-search-form {
            float: right;
        }
    `]
})
export class XHeaderComponent {}
