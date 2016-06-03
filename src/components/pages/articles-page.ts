import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { XArticlesCreatePageComponent } from './articles/create-page';
import { XArticlesEditPageComponent } from './articles/edit-page';
import { XArticlesDetailPageComponent } from './articles/detail-page';
import { XArticlesListPageComponent } from './articles/list-page';
import { XAsideComponent } from '../organisms/aside';

@Component({
  selector: 'x-articles-page',
  directives: [ROUTER_DIRECTIVES, XAsideComponent],
  template: `
    <x-aside></x-aside>
    <router-outlet></router-outlet>
  `,
  styles: [`
    :host {
      display: block;
      padding: 0 0 0 38rem;
    }
  `]
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
