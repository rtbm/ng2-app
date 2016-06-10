import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { XArticlesListComponent } from './articles-list.component';
import { ArticlesActions } from '../../actions/articles';
import { FilterPipe } from '../../pipes/filter';
import { XFormInputComponent } from '../../components/form';
import { XArticlesFilterFormComponent } from './articles-filter-form.component';
import { ToJsPipe } from '../../pipes/toJs';
import { XContentComponent } from '../../components/content/content.component';

@Component({
  selector: 'x-articles-list-page',
  directives: [XArticlesListComponent, XFormInputComponent, XArticlesFilterFormComponent, XContentComponent],
  pipes: [FilterPipe, ToJsPipe],
  template: require('./articles-list-page.component.html'),
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
