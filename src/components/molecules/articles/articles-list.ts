import {Component, Input, ViewContainerRef} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {XListComponent} from "../../atoms/list/list";
import {XListItemComponent} from "../../atoms/list/list-item";
import {XButtonComponent} from "../../atoms/form/button";
import {ArticleActions} from "../../../actions/article";
import {Dialog} from '../../../providers/dialog';
import {SlicePipe} from '../../../pipes/slice';

@Component({
  selector: 'x-articles-list',
  directives: [ROUTER_DIRECTIVES, XListComponent, XListItemComponent, XButtonComponent],
  providers: [Dialog],
  pipes: [SlicePipe],
  template: `
    <x-list>
      <x-list-item *ngFor="let article of articles">
        <h2><a [routerLink]="['/articles', article._id]">{{article.name}}</a></h2>
        <p>{{article.content | slice: 128}}</p>
        <x-button (click)="handleRemoveClick(article)">delete</x-button>
        <x-button (click)="handleEditClick(article)">Edit article</x-button>
      </x-list-item>
    </x-list>
  `,
})
export class XArticlesListComponent {
  @Input() private articles: Array<Object> = [];

  constructor(
      private articleActions: ArticleActions,
      private router: Router,
      private dialog: Dialog,
      private viewContainerRef: ViewContainerRef
  ) {
  }

  handleRemoveClick(article) {
    const dialog = this.dialog.open(this.viewContainerRef);

    dialog.result
      .then(() => this.articleActions.remove(article._id))
      .catch(() => {});
  }

  handleEditClick(article) {
    this.router.navigate(['/articles', article._id, '/edit']);
  }
}
