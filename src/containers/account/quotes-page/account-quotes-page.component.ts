import { Component, OnDestroy } from '@angular/core';
import {
  XListComponent,
  XListItemComponent,
  XListItemContentComponent,
  XListItemActionsComponent,
  XWrapperComponent,
  XButtonComponent,
  XDialogConfirmComponent,
  XModalFormComponent,
  XBoxComponent,
  XBoxHeaderComponent,
  XBoxContentComponent,
} from '../../../components';
import { select } from 'ng2-redux';
import { QuotesActions } from '../../../actions';
import { QtAccountQuoteAddFormComponent } from '../quote-add-form';
import { QtAccountQuoteEditFormComponent } from '../quote-edit-form';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'qt-account-quotes-page',
  template: require('./account-quotes-page.component.html'),
  styles: [require('./account-quotes-page.component.less')],
  pipes: [AsyncPipe],
  directives: [XWrapperComponent, XButtonComponent, XListComponent, XListItemComponent, XListItemContentComponent,
    XListItemActionsComponent, XDialogConfirmComponent, QtAccountQuoteAddFormComponent,
    QtAccountQuoteEditFormComponent, XModalFormComponent, XBoxComponent, XBoxHeaderComponent, XBoxContentComponent],
})
export class QtAccountQuotesPageComponent implements OnDestroy {
  @select(state => state.quotes) private quotes$;
  @select(state => state.session.getIn(['user', '_id'])) private userId$;

  private quotes = {};

  constructor(private quotesActions: QuotesActions) {
    this.quotesActions.fetchQuotesFeed();

    this.quotes$.subscribe((quotes: any) => {
      this.quotes = quotes.toJS();
    });
  }

  ngOnDestroy() {
    this.quotes$.unsubscribe();
    this.userId$.unsubscribe();
  }
}
