import {Component} from '@angular/core';
import {XArticlesPageComponent} from './articles-page';
import { Routes, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { XDashboardPageComponent } from './dashboard-page';
import { XAsideMenuComponent } from '../components/aside/aside-menu';
import { Observable } from 'rxjs/Rx';
import { select } from 'ng2-redux/lib/index';
import { ArticlesActions } from '../actions/articles';
import { XAsideFeaturedComponent } from './aside-featured';
import { XContentComponent } from '../components/content';

@Component({
  selector: 'account-page',
  directives: [ROUTER_DIRECTIVES, XAsideMenuComponent, XAsideFeaturedComponent, XContentComponent],
  template: `
    <x-aside-menu></x-aside-menu>
    <x-aside-featured [ngClass]="{ 'column-hidden': columnHidden }"></x-aside-featured>
    
    <x-content [ngClass]="{'column-hidden': columnHidden}">
      <router-outlet></router-outlet>
    </x-content>
  `,
  styles: [`
    :host {
      display: block;
      padding: 0 0 0 6rem;
    }
    
    x-aside-menu {
      transition: 1s transform linear;
      z-index: 6;
    }
    
    x-aside-featured {
      position: absolute;
      top: 0;
      transform: translateX(0);
      transition: .25s all linear;
      z-index: 5;
    }
    
    x-aside-featured.column-hidden {
      transform: translateX(-26rem);
    }
    
    x-content {
      padding: 0 0 0 28rem;
    }
    
    x-content.column-hidden {
      padding: 0 0 0 2rem;
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
