import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { XArticlesCreatePageComponent } from './articles/create-page';
import { XArticlesEditPageComponent } from './articles/edit-page';
import { XArticlesDetailPageComponent } from './articles/detail-page';
import { XArticlesListPageComponent } from './articles/list-page';

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

export class XArticlesPageComponent {
}
