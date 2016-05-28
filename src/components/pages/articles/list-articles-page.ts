import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {AsyncPipe} from '@angular/common';
import {select} from 'ng2-redux';
import {Observable} from 'rxjs';
import {List} from 'immutable';

import {ArticlesActions} from '../../../actions/articles';
import {XArticleFormComponent} from '../../molecules/article-form';
import {XListComponent} from '../../atoms/list/list';
import {XListItemComponent} from '../../atoms/list/list-item';
import {XWrapperComponent} from '../../atoms/wrapper';

@Component({
  selector: 'x-update-article-page',
  directives: [ROUTER_DIRECTIVES, XArticleFormComponent, XListComponent, XListItemComponent, XWrapperComponent],
  pipes: [AsyncPipe],
  template: `
    <x-wrapper>
      <h1>Articles list</h1>
      <div>isError: {{isError$ | async}}</div>
      <div>isPending: {{isPending$ | async}}</div>
      <div>isSuccess: {{isSuccess$ | async}}</div>
      <x-list>
          <x-list-item *ngFor="let article of articles">
              <h2>{{article.name}}</h2>
              <p>{{article.content}}</p>
              <a [routerLink]="['EditArticle', { _id: article._id }]">Edit article</a>
          </x-list-item>
      </x-list>
    </x-wrapper>
  `
})
export class XListArticlesPageComponent {
  @select(n => n.articles.get('isError')) private isError$: Observable<boolean>;
  @select(n => n.articles.get('isPending')) private isPending$: Observable<boolean>;1
  @select(n => n.articles.get('isSuccess')) private isSuccess$: Observable<boolean>;
  @select(n => n.articles.get('articles')) private articles$: Observable<List<any>>;

  private articles: Array<Object> = [];

  constructor(private articlesActions: ArticlesActions) {
    this.articlesActions.fetchAll();

    this.articles$.subscribe((articles:any) => { this.articles = articles.toJS(); });
  }
}
