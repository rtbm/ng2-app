import {Component} from '@angular/core';
import {XArticlesPageComponent} from './articles-page';
import { Routes, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { XDashboardPageComponent } from './dashboard-page';
import { XAsideMenuComponent } from '../components/aside/aside-menu';
import { Observable } from 'rxjs/Rx';
import { select } from 'ng2-redux/lib/index';
import { ArticlesActions } from '../actions/articles';
import { XAsideArticlesListComponent } from '../components/aside/aside-articles-list';
import { Location } from '@angular/common';

@Component({
  selector: 'account-page',
  directives: [ROUTER_DIRECTIVES, XAsideMenuComponent, XAsideArticlesListComponent],
  template: `
    <x-aside-menu></x-aside-menu>
    <x-aside-articles-list [ngClass]="{ 'collapsed': !showArticlesList }" [articles]="items"></x-aside-articles-list>
    
    <div class="wrapper" [ngClass]="{'wrapper-padding-left': showArticlesList}">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      padding: 0 0 0 6rem;
    }
    
    .wrapper {
      padding: 0 0 0 2rem;
      transition: .2s padding linear;
    }
    
    .wrapper-padding-left {
      padding: 0 0 0 28rem;
    }
    
    x-aside-articles-list {
      position: absolute;
      top: 0;
      left: 6rem;
      transition: .2s width linear;
    }
    
    .collapsed {
      overflow: hidden;
      width: 0;
    }
  `]
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
  @select(state => state.articles.getIn(['items'])) private items$: Observable<any>;

  private items: Array<any> = [];
  private showArticlesList: boolean = false;

  constructor(
    private router: Router,
    private location: Location,
    private articlesActions: ArticlesActions
  ) {
    this.isAuthorized$.subscribe((isAuthorized: boolean) => {
      if(!isAuthorized) {
        return this.router.navigate(['/user/signin']);
      }
    });

    this.articlesActions.fetchAll();

    this.items$.subscribe((items: any) => {
      this.items = items.toJS();
    });

    this.router.changes.subscribe(() => {
      this.showArticlesList = this.router.serializeUrl(this.router.urlTree) !== '/account/articles';
    });
  }
}
