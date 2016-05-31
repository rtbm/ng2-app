import {Component} from "@angular/core";
import {AsyncPipe} from "@angular/common";
import {select} from "ng2-redux";
import {Observable} from "rxjs";
import {ArticleActions} from "../../../actions/article";
import {OnActivate, Router, RouteSegment} from "@angular/router";
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
export class XEditArticlePageComponent implements OnActivate {
  @select(n => n.article.get('isError')) private isError$: Observable<boolean>;
  @select(n => n.article.get('isPending')) private isPending$: Observable<boolean>;
  @select(n => n.article.get('isSuccess')) private isSuccess$: Observable<boolean>;
  @select(n => n.article.get('article')) private article$: Observable<Object>;

  private _id: string;
  private article: Object = { name: '', content: ''};

  constructor(private articleActions: ArticleActions) {
    this.article$.subscribe((article:any) => {
      this.article = article.toJS();
    });
  }

  routerOnActivate(curr: RouteSegment) {
    this._id = curr.getParam('_id');
    this.articleActions.read(this._id);
  }

  handleSubmit(article) {
    this.articleActions.update(article, this._id);
  }
}
