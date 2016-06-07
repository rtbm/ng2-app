import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';
import { XArticlesCreatePageComponent } from './articles/articles-create-page';
import { XArticlesEditPageComponent } from './articles/articles-edit-page';
import { XArticlesDetailPageComponent } from './articles/articles-detail-page';
import { XArticlesListPageComponent } from './articles/articles-list-page';

@Component({
  selector: 'x-articles-page',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <router-outlet></router-outlet>
  `,
})

@Routes([{
  path: '/',
  component: XArticlesListPageComponent,
}, {
  path: '/create',
  component: XArticlesCreatePageComponent,
}, {
  path: '/:_id/edit',
  component: XArticlesEditPageComponent,
}, {
  path: '/:_id',
  component: XArticlesDetailPageComponent,
}])

export class XArticlesPageComponent {}
