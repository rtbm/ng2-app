import { Component, ViewContainerRef } from '@angular/core';
import { XListItemComponent } from '../../components/list';
import { XListItemActionsComponent } from '../../components/list';
import { XListItemContentComponent } from '../../components/list';
import { ToJsPipe } from '../../pipes/toJs';
import { QuotesActions } from '../../actions/quotes';
import { select } from 'ng2-redux';
import { QtQuotesCreateForm } from '../quotes/';
import { Dialog } from '../../providers/dialog';
import { XButtonComponent } from '../../components/button/button.component';
import { QuoteActions } from '../../actions/quote';

@Component({
  selector: 'qt-dashboard-list',
  directives: [XListItemComponent, XListItemContentComponent, XListItemActionsComponent, XButtonComponent,
    QtQuotesCreateForm],
  providers: [Dialog],
  pipes: [ToJsPipe],
  template: require('./dashboard-list.component.html'),
  styles: [require('./dashboard-list.component.less')],
})

export class QtDashboardListComponent {
  @select(state => state.quotes.get('items')) private items$;

  constructor(
    private quotesActions: QuotesActions,
    private quoteActions: QuoteActions,
    private dialog: Dialog,
    private viewContainerRef: ViewContainerRef
  ) {
    this.quotesActions.fetchAll();
  }

  handleRemoveClick(quote) {
    this.dialog.open(this.viewContainerRef).result
      .then(() => this.quoteActions.remove(quote._id))
      .catch(e => console.log(e));
  }
}
