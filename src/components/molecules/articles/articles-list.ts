import {Component, Input} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {XListComponent} from "../../atoms/list/list";
import {XListItemComponent} from "../../atoms/list/list-item";
import {XButtonComponent} from "../../atoms/form/button";
import {ArticleActions} from "../../../actions/article";

@Component({
  selector: 'x-articles-list',
  directives: [ROUTER_DIRECTIVES, XListComponent, XListItemComponent, XButtonComponent],
  template: `     
    <x-list>
      <x-list-item *ngFor="let article of articles">
        <h2><a [routerLink]="['/articles', article._id]">{{article.name}}</a></h2>
        <p>{{article.content}}</p>
        <x-button (click)="articleActions.remove(article._id)">delete</x-button>
        <a [routerLink]="['/articles', article._id, '/edit']">Edit article</a>
      </x-list-item>
    </x-list>
  `,
})
export class XArticlesListComponent {
  @Input() private articles: Array<Object> = [];

  constructor(private articleActions: ArticleActions) {
  }
}
