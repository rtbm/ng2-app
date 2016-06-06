import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { ArticleActions } from '../../actions/article';
import { XArticlesCreateFormComponent } from '../../components/articles/articles-create-form';

@Component({
  selector: 'x-articles-create-page',
  directives: [XArticlesCreateFormComponent],
  pipes: [AsyncPipe],
  template: `
    <x-articles-create-form (onSubmit)="articleActions.save($event)"></x-articles-create-form>
  `,
  styles: [`
    :host h1 {
      margin: 0;
    }
  `]
})
export class XArticlesCreatePageComponent {
  @select(state => state.article.get('isError')) private isError$: Observable<boolean>;
  @select(state => state.article.get('isPending')) private isPending$: Observable<boolean>;
  @select(state => state.article.get('isSuccess')) private isSuccess$: Observable<boolean>;

  constructor(private articleActions: ArticleActions) {
  }
}
