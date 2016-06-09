import { Component, Input, ViewContainerRef } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { XListComponent, XListItemComponent, XListItemActionsComponent, XListItemContentComponent } from '../list';
import { XButtonComponent } from '../button';
import { ArticleActions } from '../../actions/article';
import { Dialog } from '../../providers/dialog';

@Component({
  selector: 'x-articles-list',
  directives: [ROUTER_DIRECTIVES, XListComponent, XListItemComponent, XListItemContentComponent,
    XListItemActionsComponent, XButtonComponent],
  providers: [Dialog],
  template: require('./articles-list.component.html'),
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
