import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { ArticleActions } from '../../actions/article';
import { OnActivate, RouteSegment } from '@angular/router';
import { XArticlesFormComponent } from '../../components/articles/articles-form';

@Component({
  selector: 'x-articles-edit-page',
  directives: [XArticlesFormComponent],
  pipes: [AsyncPipe],
  template: `
    <h1>Edit Article</h1>
    <x-articles-form [article]="article" (onSubmit)="handleSubmit($event)"></x-articles-form>
  `,
})
export class XArticlesEditPageComponent implements OnActivate {
  @select(state => state.article.get('isError')) private isError$: Observable<boolean>;
  @select(state => state.article.get('isPending')) private isPending$: Observable<boolean>;
  @select(state => state.article.get('isSuccess')) private isSuccess$: Observable<boolean>;
  @select(state => state.article.get('item')) private item$: Observable<any>;

  private _id: string;
  private article;

  constructor(private articleActions: ArticleActions) {
    this.item$.subscribe((item: any) => {
      this.article = item.toJS();
    })
  }

  routerOnActivate(curr: RouteSegment) {
    this._id = curr.getParam('_id');
    this.articleActions.read(this._id);
  }

  handleSubmit(article) {
    this.articleActions.update(article, this._id);
  }
}
