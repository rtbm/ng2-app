import { Component } from '@angular/core';
import { QuotesActions } from '../../actions/quotes';
import { ToJsPipe } from '../../pipes/toJs';
import { select } from 'ng2-redux';

@Component({
  selector: 'x-dashboard',
  pipes: [ToJsPipe],
  directives: [],
  template: require('./dashboard-page.component.html'),
})

export class XDashboardPageComponent {
  @select(state => state.quotes.get('items')) private items$;

  constructor(private quotesActions: QuotesActions) {
    this.quotesActions.fetchAll();
  }
}
