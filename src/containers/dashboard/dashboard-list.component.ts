import { Component
//  , ViewContainerRef
} from '@angular/core';
import { XListItemComponent } from '../../components/list';
import { ToJsPipe } from '../../pipes/toJs';
import { QuotesActions } from '../../actions/quotes';
import { select } from 'ng2-redux';
import { QtQuotesFormComponent } from '../quotes';
import { QtQuoteComponent } from '../quotes';
// import { QuoteActions } from '../../actions/quote';
// import { Dialog } from '../../providers/dialog';
import { XButtonComponent } from '../../components/button/button.component';
import { FilterPipe } from '../../pipes/filter';

@Component({
  selector: 'qt-dashboard-list',
  //providers: [Dialog],
  directives: [XListItemComponent, QtQuotesFormComponent, QtQuoteComponent, XButtonComponent],
  pipes: [ToJsPipe, FilterPipe],
  template: require('./dashboard-list.component.html'),
  styles: [require('./dashboard-list.component.less')],
})

export class QtDashboardListComponent {
  @select(state => state.quotes.get('items')) private items$;

  private items = [];

  constructor(
    private quotesActions: QuotesActions//,
    //private viewContainerRef: ViewContainerRef,
    //private quoteActions: QuoteActions,
    //private dialog: Dialog
  ) {
    this.quotesActions.fetchAll();

    this.items$.subscribe((items: any) => {
      this.items = items.toJS();
    });
  }

  handleEdit() {
    console.log('dashboard edit click');
  }

  handleRemove() {
    console.log('dashboard remove click');
    /*this.dialog.open(this.viewContainerRef).result
      .then(() => this.quoteActions.remove(quote._id))
      .catch(() => {});*/
  }
}