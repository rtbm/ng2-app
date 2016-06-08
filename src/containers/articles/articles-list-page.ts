import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { XArticlesListComponent } from '../../components/articles/articles-list';
import { ArticlesActions } from '../../actions/articles';
import { FilterPipe } from '../../pipes/filter';
import { XInputComponent } from '../../components/form/input';
import { XArticlesFilterFormComponent } from '../../components/articles/articles-filter-form';
import { ToJsPipe } from '../../pipes/toJs';

@Component({
  selector: 'x-articles-list-page',
  directives: [XArticlesListComponent, XInputComponent, XArticlesFilterFormComponent],
  pipes: [FilterPipe, ToJsPipe],
  template: `
    <h1>Articles list</h1>
    <x-articles-filter-form (onKeyUp)="handleFilterFormKeyUp($event)"></x-articles-filter-form>
    <x-articles-list [articles]="(items$ | toJS) | filter: phrase : ['name', 'content'] "></x-articles-list>   
  `,
})
export class XArticlesListPageComponent {
  @select(state => state.articles.get('items')) private items$: Observable<any>;

  private phrase: string = '';

  constructor(private articlesActions: ArticlesActions) {
    this.articlesActions.fetchAll();
  }

  handleFilterFormKeyUp(values) {
    this.phrase = values.phrase;
  }
}
