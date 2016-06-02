import {Component} from "@angular/core";
import {select} from 'ng2-redux';
import {Observable} from 'rxjs';
import {XArticlesListComponent} from "../../molecules/articles/articles-list";
import {XWrapperComponent} from '../../atoms/wrapper';
import { List } from 'immutable/dist/immutable-nonambient';
import { ArticlesActions } from '../../../actions/articles';

@Component({
  selector: 'x-articles-list-page',
  directives: [XArticlesListComponent, XWrapperComponent],
  template: `
    <x-wrapper>
      <h1>Articles list</h1>
      <x-articles-list [articles]="articles"></x-articles-list>
    </x-wrapper>
  `
})
export class XArticlesListPageComponent {
  @select(state => state.articles.get('items')) private items$: Observable<List<any>>;

  private articles: Array<Object> = [];

  constructor(private articlesActions: ArticlesActions) {
    this.articlesActions.fetchAll();

    this.items$.subscribe((items: any) => {
      this.articles = items.toJS();
    });
  }
}
