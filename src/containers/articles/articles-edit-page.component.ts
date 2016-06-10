import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { ArticleActions } from '../../actions/article';
import { OnActivate, RouteSegment } from '@angular/router';
import { XArticlesEditFormComponent } from './articles-edit-form.component';

@Component({
  selector: 'x-articles-edit-page',
  directives: [XArticlesEditFormComponent],
  pipes: [AsyncPipe],
  template: require('./articles-edit-page.component.html'),
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
