import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { List } from 'immutable';
import { XArticlesListComponent } from '../articles/articles-list';
import { XAsideMenuComponent } from './aside-menu';
import { ArticlesActions } from '../../actions/articles';

@Component({
  selector: 'x-aside',
  directives: [XArticlesListComponent, XAsideMenuComponent],
  template: `
    <x-aside-menu></x-aside-menu><x-articles-list [articles]="articles"></x-articles-list>
  `,
  styles: [`
    :host {
      position: absolute;
      top: 0;
      left: 0;
    }
    
    x-aside-menu {
      display: inline-block;
      vertical-align: top;
    }
    
    x-articles-list {
      width: 26rem;
      padding: 0 2rem;
      display: inline-block;
      vertical-align: top;
      background: #efefef;
      height: 100vh;
      overflow-y: auto;
    }
  `],
})
export class XAsideComponent {
  @select(state => state.articles.get('items')) private items$: Observable<List<any>>;

  private articles: Array<Object> = [];

  constructor(private articlesActions: ArticlesActions) {
    this.articlesActions.fetchAll();

    this.items$.subscribe((items: any) => {
      this.articles = items.toJS();
    });
  }
}
