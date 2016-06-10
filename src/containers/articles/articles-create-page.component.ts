import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { ArticleActions } from '../../actions/article';
import { XArticlesCreateFormComponent } from './articles-create-form.component';

@Component({
  selector: 'x-articles-create-page',
  directives: [XArticlesCreateFormComponent],
  pipes: [AsyncPipe],
  template: require('./articles-create-page.component.html'),
  styles: [require('./articles-create-page.component.less')]
})
export class XArticlesCreatePageComponent {
  @select(state => state.article.get('isError')) private isError$: Observable<boolean>;
  @select(state => state.article.get('isPending')) private isPending$: Observable<boolean>;
  @select(state => state.article.get('isSuccess')) private isSuccess$: Observable<boolean>;

  constructor(private articleActions: ArticleActions) {
  }
}
