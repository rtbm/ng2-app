import {Component, Input} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {XListComponent} from "../atoms/list/list";
import {XListItemComponent} from "../atoms/list/list-item";
import {XButtonComponent} from "../atoms/form/button";
import {ArticleActions} from "../../actions/article";

@Component({
  selector: 'x-articles-list',
  directives: [ROUTER_DIRECTIVES, XListComponent, XListItemComponent, XButtonComponent],
  template: `     
    <x-list>
      <x-list-item *ngFor="let article of articles">
        <h2>{{article.name}}</h2>
        <p>{{article.content}}</p>
        <a [routerLink]="['EditArticle', { _id: article._id }]">Edit article</a>
        <x-button (click)="articleActions.remove(article._id)">delete</x-button>
      </x-list-item>
    </x-list>
  `,
})
export class XArticlesListComponent {
  @Input() private articles: Array<Object> = [];

  constructor(private articleActions: ArticleActions) {
  }
}
