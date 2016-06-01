import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';
import {XArticleCreatePageComponent} from "./articles/article-create-page";
import {XArticleEditPageComponent} from "./articles/article-edit-page";
import {XArticleDetailPageComponent} from "./articles/article-detail-page";
import {XArticlesListPageComponent} from "./articles/articles-list-page";

@Component({
    selector: 'x-articles-page',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <router-outlet></router-outlet>
    `
})

@Routes([{
    path: '/',
    component: XArticlesListPageComponent,
}, {
    path: '/create',
    component: XArticleCreatePageComponent,
}, {
    path: '/:_id/edit',
    component: XArticleEditPageComponent,
}, {
    path: '/:_id',
    component: XArticleDetailPageComponent,
}])

export class XArticlesPageComponent {
}
