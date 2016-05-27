import {Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {select} from 'ng2-redux';
import {Observable} from 'rxjs';

import {ArticlesActions} from '../../../actions/article';
import {XArticleFormComponent} from '../../molecules/article-form';

@Component({
  selector: 'x-create-article-page',
  directives: [XArticleFormComponent],
  pipes: [AsyncPipe],
  template: `
    <h1>Create Article</h1>
    <div>isError: {{isError$ | async}}</div>
    <div>isPending: {{isPending$ | async}}</div>
    <div>isSuccess: {{isSuccess$ | async}}</div>
    <x-article-form (onSubmit)="handleSubmit($event)"></x-article-form>
  `
})
export class XCreateArticlePageComponent {
  constructor(private articlesActions: ArticlesActions) {}

  @select(n => n.article.get('isError')) private isError$: Observable<boolean>;
  @select(n => n.article.get('isPending')) private isPending$: Observable<boolean>;
  @select(n => n.article.get('isSuccess')) private isSuccess$: Observable<boolean>;

  handleSubmit(article) {
    this.articlesActions.save(article);
  }
}
