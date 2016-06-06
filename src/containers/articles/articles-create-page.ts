import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { ArticleActions } from '../../actions/article';
import { XArticlesFormComponent } from '../../components/articles/articles-form';

@Component({
  selector: 'x-articles-create-page',
  directives: [XArticlesFormComponent],
  pipes: [AsyncPipe],
  template: `
    <h1>Create Article</h1>
    <x-articles-form (onSubmit)="articleActions.save($event)"></x-articles-form>
  `,
})
export class XArticlesCreatePageComponent {
  @select(state => state.article.get('isError')) private isError$: Observable<boolean>;
  @select(state => state.article.get('isPending')) private isPending$: Observable<boolean>;
  @select(state => state.article.get('isSuccess')) private isSuccess$: Observable<boolean>;

  constructor(private articleActions: ArticleActions) {
  }
}
