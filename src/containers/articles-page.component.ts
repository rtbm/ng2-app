import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import {
  XArticlesCreatePageComponent,
  XArticlesEditPageComponent,
  XArticlesDetailPageComponent,
  XArticlesListPageComponent
} from './articles';

@Component({
  selector: 'x-articles-page',
  directives: [ROUTER_DIRECTIVES],
  template: require('./articles-page.component.html'),
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
