import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {select} from 'ng2-redux';
import {AsyncPipe} from '@angular/common';
import {Router} from '@angular/router-deprecated';
import {ISession} from '../../reducers/session';
import {XWrapperComponent} from '../atoms/ui/wrapper-component';
import {XLogoComponent} from '../atoms/ui/logo-component';
import {XSearchFormComponent} from '../molecules/search-form-component';
import {XTopMenuComponent} from '../molecules/top-menu-component';
import {XAccountBoxComponent} from '../molecules/account-box-component';

@Component({
    selector: 'x-header',
    directives: [XWrapperComponent, XLogoComponent, XSearchFormComponent, XTopMenuComponent, XAccountBoxComponent],
    pipes: [AsyncPipe],
    template: `
        <x-wrapper>
            <x-logo></x-logo>
            <x-top-menu></x-top-menu>
            <x-account-box
                [isLogged]="isLogged"
                [email]="email"
                (onSigninClick)="handleSigninClick()"
                (onSignupClick)="handleSignupClick()"
            ></x-account-box>
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
export class XHeaderComponent {
    @select() session$: Observable<ISession>;

    private isLogged: boolean = false;
    private email: string = '';

    constructor(private router: Router) {
        this.session$.subscribe(n => {
            this.isLogged = n.get('isLogged');
            this.email = n.getIn(['user', 'email']);
        });
    }

    handleSigninClick() {
        this.router.navigate(['Signin']);
    }

    handleSignupClick() {
        this.router.navigate(['Signup']);
    }
}
