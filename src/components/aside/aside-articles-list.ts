import { Component, Input, ViewContainerRef } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { XListComponent } from '../list/list';
import { XListItemComponent } from '../list/list-item';
import { XButtonComponent } from '../button/button';
import { ArticleActions } from '../../actions/article';
import { Dialog } from '../../providers/dialog';
import { SlicePipe } from '../../pipes/slice';
import { XListItemActionsComponent } from '../list/list-item-actions';
import { XIconComponent } from '../icon';
import { XListItemContentComponent } from '../list/list-item-content';

@Component({
  selector: 'x-aside-articles-list',
  directives: [ROUTER_DIRECTIVES, XListComponent, XListItemComponent, XListItemContentComponent,
    XListItemActionsComponent, XButtonComponent, XIconComponent],
  providers: [Dialog],
  pipes: [SlicePipe],
  template: `
    <x-list>
      <x-list-item *ngFor="let article of articles">
        <x-list-item-content (onClick)="handleClick(article)">
          <h2>{{article.name}}</h2>
          <p>{{article.content | slice: 128}}</p>
        </x-list-item-content>
        <x-list-item-actions>
          <x-button (click)="handleEditClick(article)">
            <x-icon size="small">edit</x-icon>          
          </x-button>
          <x-button (click)="handleRemoveClick(article)">
            <x-icon size="small">remove</x-icon>
          </x-button>
        </x-list-item-actions>
      </x-list-item>
    </x-list>
  `,
  styles: [`
    :host {
      display: block;
    }

    :host x-icon {
      color: #0b6190;
    }

    :host x-list-item {
      cursor: pointer;
      padding-right: 3rem;
      padding-left: 2rem;
      position: relative;
    }

    :host x-list-item:hover {
      background: #d3daef;
    }

    :host x-list-item-content {
      display: block;
    }

    :host x-list-item-actions {
      display: none;
      bottom: 0;
      right: 0;
      position: absolute;
    }

    :host x-list-item-actions x-button {
      display: block;
    }

    :host x-list-item:hover x-list-item-actions {
      display: block;
    }
  `]
})
export class XAsideArticlesListComponent {
  @Input() private articles: Array<Object> = [];

  constructor(private articleActions: ArticleActions,
              private router: Router,
              private dialog: Dialog,
              private viewContainerRef: ViewContainerRef) {
  }

  handleClick(article) {
    return this.router.navigate(['/articles', article._id]);
  }

  handleRemoveClick(article) {
    const dialog = this.dialog.open(this.viewContainerRef);

    return dialog.result
      .then(() => this.articleActions.remove(article._id))
      .catch(() => {
      });
  }

  handleEditClick(article) {
    return this.router.navigate(['/articles', article._id, '/edit']);
  }
}
