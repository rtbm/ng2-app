import logger from './utils/logger';

import {Component, ViewEncapsulation} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';

import {NgRedux} from 'ng2-redux';
import rootReducer from './reducers';
import {IAppState} from './reducers';

import {XFrontPageComponent} from './components/pages/front-page-component';
import {XSignupPageComponent} from './components/pages/signup-page-component';
import {XHeaderComponent} from './components/organisms/header-component';

@Component({
    selector: 'x-app',
    directives: [ROUTER_DIRECTIVES, XHeaderComponent],
    template: `
        <x-header></x-header>
        <router-outlet></router-outlet>
    `,
    encapsulation: ViewEncapsulation.None
})

@RouteConfig([{
    path: '/',
    name: 'Home',
    component: XFrontPageComponent,
    useAsDefault: true,
}, {
    path: '/signup',
    name: 'Signup',
    component: XSignupPageComponent,
}])

export class XApp {
    constructor(private ngRedux: NgRedux<IAppState>) {
        ngRedux.configureStore(rootReducer, {}, [logger], []);

    }
}
