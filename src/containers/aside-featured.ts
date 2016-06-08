import { Component, ViewContainerRef } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { XListComponent } from '../components/list/list';
import { XListItemComponent } from '../components/list/list-item';
import { XButtonComponent } from '../components/button/button';
import { Dialog } from '../providers/dialog';
import { SlicePipe } from '../pipes/slice';
import { XListItemActionsComponent } from '../components/list/list-item-actions';
import { XIconComponent } from '../components/icon';
import { XListItemContentComponent } from '../components/list/list-item-content';
import { select } from 'ng2-redux/lib/index';
import { Observable } from 'rxjs/Rx';
import { FeaturedActions } from '../actions/featured';
import { ToJsPipe } from '../pipes/toJs';

@Component({
  selector: 'x-aside-featured',
  directives: [ROUTER_DIRECTIVES, XListComponent, XListItemComponent, XListItemContentComponent,
    XListItemActionsComponent, XButtonComponent, XIconComponent],
  providers: [Dialog],
  pipes: [SlicePipe, ToJsPipe],
  template: `
    <x-list>
      <x-list-item *ngFor="let article of (items$ | toJS)">
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
      width: 26rem;
      display: inline-block;
      vertical-align: top;
      background: #efefef;
      height: 100vh;
      overflow-y: auto;
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
      background: #D6DEE4;
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
export class XAsideFeaturedComponent {
  @select(state => state.featured.get('items')) private items$: Observable<any>;

  constructor(private router: Router,
              private dialog: Dialog,
              private viewContainerRef: ViewContainerRef,
              private featuredActions: FeaturedActions) {
    this.featuredActions.fetchAll();
  }

  handleClick(article) {
    return this.router.navigate(['/account/articles', article._id]);
  }

  handleRemoveClick(article) {
    const dialog = this.dialog.open(this.viewContainerRef);

    return dialog.result
      .then(() => this.featuredActions.remove(article._id))
      .catch(() => {
      });
  }

  handleEditClick(article) {
    return this.router.navigate(['/account/articles', article._id, '/edit']);
  }
}
