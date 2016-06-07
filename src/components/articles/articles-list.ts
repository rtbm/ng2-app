import { Component, Input, ViewContainerRef } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { XListComponent } from '../list/list';
import { XListItemComponent } from '../list/list-item';
import { XButtonComponent } from '../button/button';
import { ArticleActions } from '../../actions/article';
import { Dialog } from '../../providers/dialog';
import { XListItemActionsComponent } from '../list/list-item-actions';
import { XListItemContentComponent } from '../list/list-item-content';

@Component({
  selector: 'x-articles-list',
  directives: [ROUTER_DIRECTIVES, XListComponent, XListItemComponent, XListItemContentComponent,
    XListItemActionsComponent, XButtonComponent],
  providers: [Dialog],
  template: `
    <x-list>
      <x-list-item *ngFor="let article of articles">
        <x-list-item-content>
          <h2><a [routerLink]="['/articles', article._id]">{{article.name}}</a></h2>
          <p>{{article.content}}</p>
        </x-list-item-content>
        <x-list-item-actions>
          <x-button size="normal" preset="casual" (click)="handleEditClick(article)">Edit</x-button>
          <x-button size="normal" preset="negative" (click)="handleRemoveClick(article)">Delete</x-button>
        </x-list-item-actions>
      </x-list-item>
    </x-list>
  `,
})
export class XArticlesListComponent {
  @Input() private articles: Array<Object> = [];

  constructor(private articleActions: ArticleActions,
              private router: Router,
              private dialog: Dialog,
              private viewContainerRef: ViewContainerRef) {
  }

  handleRemoveClick(article) {
    const dialog = this.dialog.open(this.viewContainerRef);

    dialog.result
      .then(() => this.articleActions.remove(article._id))
      .catch(() => {
      });
  }

  handleEditClick(article) {
    this.router.navigate(['/account/articles', article._id, '/edit']);
  }
}
