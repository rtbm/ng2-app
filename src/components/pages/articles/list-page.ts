import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { XArticlesListComponent } from '../../molecules/articles/articles-list';
import { List } from 'immutable/dist/immutable-nonambient';
import { ArticlesActions } from '../../../actions/articles';
import { FilterPipe } from '../../../pipes/filter';
import { XInputComponent } from '../../atoms/form/input';
import { XArticlesFilterFormComponent } from '../../molecules/articles/articles-filter-form';

@Component({
  selector: 'x-articles-list-page',
  directives: [XArticlesListComponent, XInputComponent, XArticlesFilterFormComponent],
  pipes: [FilterPipe],
  template: `
    <h1>Articles list</h1>
    <x-articles-filter-form (onKeyUp)="handleFilterFormKeyUp($event)"></x-articles-filter-form>
    <x-articles-list [articles]="articles | filter: phrase : ['name', 'content'] "></x-articles-list>   
  `,
})
export class XArticlesListPageComponent {
  @select(state => state.articles.get('items')) private items$: Observable<List<any>>;

  private articles: Array<Object> = [];
  private phrase: string = '';

  constructor(private articlesActions: ArticlesActions) {
    this.articlesActions.fetchAll();

    this.items$.subscribe((items: any) => {
      this.articles = items.toJS();
    });
  }

  handleFilterFormKeyUp(values) {
    this.phrase = values.phrase;
  }
}
