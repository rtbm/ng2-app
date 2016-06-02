import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { ArticleActions } from '../../../actions/article';
import { XArticlesFormComponent } from '../../molecules/articles/articles-form';
import { XWrapperComponent } from '../../atoms/wrapper';

@Component({
  selector: 'x-articles-create-page',
  directives: [XArticlesFormComponent, XWrapperComponent],
  pipes: [AsyncPipe],
  template: `
    <x-wrapper>
      <h1>Create Article</h1>
      
      <div>isError: {{isError$ | async}}</div>
      <div>isPending: {{isPending$ | async}}</div>
      <div>isSuccess: {{isSuccess$ | async}}</div>
      
      <x-articles-form (onSubmit)="articleActions.save($event)"></x-articles-form>
    </x-wrapper>
  `,
})
export class XArticlesCreatePageComponent {
  @select(state => state.article.get('isError')) private isError$: Observable<boolean>;
  @select(state => state.article.get('isPending')) private isPending$: Observable<boolean>;
  @select(state => state.article.get('isSuccess')) private isSuccess$: Observable<boolean>;

  constructor(private articleActions: ArticleActions) {
  }
}
