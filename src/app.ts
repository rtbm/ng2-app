import {Component, ViewEncapsulation} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';

import {NgRedux} from 'ng2-redux';
import rootReducer from './reducers';
import {IAppState} from './reducers';
import {middlewares} from './state/middlewares';
import {enhancers} from './state/enhancers';

import {XHeaderComponent} from './components/organisms/header';
import {XFrontPageComponent} from './components/pages/front-page';
import {XSigninPageComponent} from './components/pages/signin-page';
import {XSignupPageComponent} from './components/pages/signup-page';

@Component({
    selector: 'x-app',
    directives: [ROUTER_DIRECTIVES, XHeaderComponent],
    template: `
        <x-header></x-header>
        <router-outlet></router-outlet>
    `,
    encapsulation: ViewEncapsulation.None,
})

@RouteConfig([{
    path: '/',
    name: 'Home',
    component: XFrontPageComponent,
    useAsDefault: true,
}, {
    path: '/signin',
    name: 'Signin',
    component: XSigninPageComponent,
}, {
    path: '/signup',
    name: 'Signup',
    component: XSignupPageComponent,
}])

export class XApp {
    constructor(private ngRedux: NgRedux<IAppState>) {
        ngRedux.configureStore(rootReducer, {}, middlewares, enhancers);
    }
}
