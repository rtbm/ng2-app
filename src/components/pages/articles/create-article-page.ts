import {Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {select} from 'ng2-redux';
import {Observable} from 'rxjs';

import {ArticlesActions} from '../../../actions/articles';
import {XArticleFormComponent} from '../../molecules/article-form';
import {XWrapperComponent} from '../../atoms/wrapper';

@Component({
  selector: 'x-create-article-page',
  directives: [XArticleFormComponent, XWrapperComponent],
  pipes: [AsyncPipe],
  template: `
    <x-wrapper>
      <h1>Create Article</h1>
      <div>isError: {{isError$ | async}}</div>
      <div>isPending: {{isPending$ | async}}</div>
      <div>isSuccess: {{isSuccess$ | async}}</div>
      <x-article-form (onSubmit)="handleSubmit($event)"></x-article-form>
    </x-wrapper>
  `
})
export class XCreateArticlePageComponent {
  @select(n => n.article.get('isError')) private isError$: Observable<boolean>;
  @select(n => n.article.get('isPending')) private isPending$: Observable<boolean>;
  @select(n => n.article.get('isSuccess')) private isSuccess$: Observable<boolean>;

  constructor(private articlesActions: ArticlesActions) {}

  handleSubmit(article) {
    this.articlesActions.save(article);
  }
}
