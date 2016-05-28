import {Component} from "@angular/core";
import {AsyncPipe} from "@angular/common";
import {select} from "ng2-redux";
import {Observable} from "rxjs";
import {RouteParams} from "@angular/router-deprecated";
import {ArticlesActions} from "../../../actions/articles";
import {XArticleFormComponent} from "../../molecules/article-form";
import {XWrapperComponent} from "../../atoms/wrapper";

@Component({
  selector: 'x-create-article-page',
  directives: [XArticleFormComponent, XWrapperComponent],
  pipes: [AsyncPipe],
  template: `
    <h1>Edit Article</h1>
    <div>isError: {{isError$ | async}}</div>
    <div>isPending: {{isPending$ | async}}</div>
    <div>isSuccess: {{isSuccess$ | async}}</div>      
    <x-article-form [article]="article" (onSubmit)="handleSubmit($event)"></x-article-form>
  `
})
export class XEditArticlePageComponent {
  @select(n => n.articles.get('isError')) private isError$: Observable<boolean>;
  @select(n => n.articles.get('isPending')) private isPending$: Observable<boolean>;
  @select(n => n.articles.get('isSuccess')) private isSuccess$: Observable<boolean>;
  @select(n => n.articles.get('article')) private article$: Observable<Object>;

  private _id: string = '';
  private article: Object = {};

  constructor(private articlesActions: ArticlesActions,
              private routeParams: RouteParams) {
    this._id = routeParams.get('_id');
    this.articlesActions.read(this._id);

    this.article$.subscribe((article: any) => {
      this.article = article.toJS();
    })
  }

  handleSubmit(article) {
    this.articlesActions.update(article, this._id);
  }
}
