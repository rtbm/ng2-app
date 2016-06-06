import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';
import { XArticlesCreatePageComponent } from './articles/articles-create-page';
import { XArticlesEditPageComponent } from './articles/articles-edit-page';
import { XArticlesDetailPageComponent } from './articles/articles-detail-page';
import { XArticlesListPageComponent } from './articles/articles-list-page';
import { XAsideComponent } from '../components/aside/aside';
import { Observable } from 'rxjs/Rx';
import { select } from 'ng2-redux/lib/index';

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
      padding: 2rem 2rem 2rem 36rem;
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
  @select(state => state.session.get('isAuthorized')) private isAuthorized$: Observable<boolean>;

  constructor(private router: Router) {
    this.isAuthorized$.subscribe((isAuthorized: boolean) => {
      if(!isAuthorized) {
        return this.router.navigate(['/user/signin']);
      }
    });
  }
}
