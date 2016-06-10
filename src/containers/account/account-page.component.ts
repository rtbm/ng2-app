import { Component } from '@angular/core';
import { XArticlesPageComponent } from '../articles/articles-page.component';
import { Routes, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { XDashboardPageComponent } from '../dashboard/dashboard-page.component';
import { XAsideMenuComponent } from '../aside/aside-menu.component';
import { Observable } from 'rxjs/Rx';
import { select } from 'ng2-redux/lib/index';
import { ArticlesActions } from '../../actions/articles';

@Component({
  selector: 'account-page',
  directives: [ROUTER_DIRECTIVES, XAsideMenuComponent],
  template: require('./account-page.component.html'),
  styles: [require('./account-page.component.less')]
})

@Routes([{
  path: '/dashboard',
  component: XDashboardPageComponent
}, {
  path: '/articles',
  component: XArticlesPageComponent
}])

export class XAccountPageComponent {
  @select(state => state.session.get('isAuthorized')) private isAuthorized$: Observable<boolean>;

  private columnHidden: boolean = false;

  constructor(
    private router: Router,
    private articlesActions: ArticlesActions
  ) {
    this.isAuthorized$.subscribe((isAuthorized: boolean) => {
      if(!isAuthorized) {
        return this.router.navigate(['/user/signin']);
      }
    });

    this.articlesActions.fetchAll();

    this.router.changes.subscribe(() => {
      this.columnHidden = this.router.serializeUrl(this.router.urlTree) === '/account/articles';
    });
  }
}
