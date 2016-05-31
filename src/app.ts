import {Component, ViewEncapsulation} from "@angular/core";
import {ROUTER_DIRECTIVES, Routes} from "@angular/router";
import {NgRedux} from "ng2-redux";
import rootReducer, {IAppState} from "./reducers";
import {middlewares} from "./state/middlewares";
import {enhancers} from "./state/enhancers";
import {XHeaderComponent} from "./components/organisms/header";
import {XAsideComponent} from "./components/organisms/aside";
import {XHomePageComponent} from "./components/pages/home-page";
import {XSigninPageComponent} from "./components/pages/user/signin-page";
import {XSignupPageComponent} from "./components/pages/user/signup-page";
import {XArticleCreatePageComponent} from "./components/pages/articles/article-create-page";
import {XArticleEditPageComponent} from "./components/pages/articles/article-edit-page";
import {XArticleDetailPageComponent} from "./components/pages/articles/article-detail-page";
import {XArticlesListPageComponent} from "./components/pages/articles/articles-list-page";

@Component({
  selector: 'x-app',
  directives: [ROUTER_DIRECTIVES, XHeaderComponent, XAsideComponent],
  template: `
    <x-header></x-header>
    <x-aside></x-aside>
    <router-outlet></router-outlet>
    `,
  encapsulation: ViewEncapsulation.None,
})

@Routes([{
  path: '/',
  component: XHomePageComponent,
}, {
  path: '/signin',
  component: XSigninPageComponent,
}, {
  path: '/signup',
  component: XSignupPageComponent,
}, {
  path: '/article/create',
  component: XArticleCreatePageComponent,
}, {
  path: '/articles/:_id/edit',
  component: XArticleEditPageComponent,
}, {
  path: '/articles/:_id',
  component: XArticleDetailPageComponent,
}, {
  path: '/articles',
  component: XArticlesListPageComponent,
}])

export class XApp {
  constructor(private ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, {}, middlewares, enhancers);
  }
}
