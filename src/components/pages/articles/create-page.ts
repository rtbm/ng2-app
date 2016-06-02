import {Component} from "@angular/core";
import {AsyncPipe} from "@angular/common";
import {select} from "ng2-redux";
import {Observable} from "rxjs";
import {ArticleActions} from "../../../actions/article";
import {XArticleFormComponent} from "../../molecules/articles/article-form";
import {XWrapperComponent} from '../../atoms/wrapper';

@Component({
  selector: 'x-articles-create-page',
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
export class XArticlesCreatePageComponent {
  @select(n => n.articles.get('isError')) private isError$: Observable<boolean>;
  @select(n => n.articles.get('isPending')) private isPending$: Observable<boolean>;
  @select(n => n.articles.get('isSuccess')) private isSuccess$: Observable<boolean>;

  constructor(private articleActions: ArticleActions) {
  }

  handleSubmit(article) {
    this.articleActions.save(article);
  }
}
