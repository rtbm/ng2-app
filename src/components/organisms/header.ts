import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {select} from 'ng2-redux';
import {AsyncPipe} from '@angular/common';
import {Router} from '@angular/router-deprecated';
import {ISession} from '../../reducers/session';
import {XWrapperComponent} from '../atoms/wrapper';
import {XLogoComponent} from '../atoms/logo';
import {XSearchFormComponent} from '../molecules/search-form';
import {XTopMenuComponent} from '../molecules/top-menu';
import {XAccountBoxComponent} from '../molecules/user/account-box';
import {JwtHelper} from 'angular2-jwt';
import {SearchService} from '../../services/search';

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
            <x-search-form (onSubmit)="handleSearchSubmit($event)"></x-search-form>
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

    constructor(
      private router: Router,
      private searchService: SearchService
    ) {
        const jwt = new JwtHelper();

        this.session$.subscribe(n => {
            this.isLogged = n.get('isLogged');

            const token = n.get('id_token');

            if(token) {
                const decodedToken = jwt.decodeToken(token);
                this.email = decodedToken.email;
            }
        });
    }

    handleSigninClick() {
        this.router.navigate(['Signin']);
    }

    handleSignupClick() {
        this.router.navigate(['Signup']);
    }

    handleSearchSubmit(query) {
        this.searchService.search(query);
    }
}
