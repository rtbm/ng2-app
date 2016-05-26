import logger from './utils/logger';

import {Component, ViewEncapsulation} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';

import {NgRedux} from 'ng2-redux';
import rootReducer from './reducers';
import {IAppState} from './reducers';

import {WsFrontPageComponent} from './components/pages/front-page-component';
import {WsSignupPageComponent} from './components/pages/signup-page-component';
import {WsHeaderComponent} from './components/organisms/header-component';

@Component({
    selector: 'ws-app',
    directives: [ROUTER_DIRECTIVES, WsHeaderComponent],
    template: `
        <ws-header></ws-header>
        <router-outlet></router-outlet>
    `,
    encapsulation: ViewEncapsulation.None
})

@RouteConfig([{
    path: '/',
    component: WsFrontPageComponent,
    name: 'Home',
    useAsDefault: true,
}, {
    path: '/signup',
    component: WsSignupPageComponent,
    name: 'Signup',
}])

export class WsApp {
    constructor(private ngRedux: NgRedux<IAppState>) {
        ngRedux.configureStore(rootReducer, {}, [logger], []);
    }
}
