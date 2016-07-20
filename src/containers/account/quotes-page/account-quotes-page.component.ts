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
  XFormMessageComponent,
} from '../../../components';
import { select } from 'ng2-redux';
import { QuotesActions } from '../../../actions';
import { QtAccountQuoteAddFormComponent } from '../quote-add-form';
import { QtAccountQuoteEditFormComponent } from '../quote-edit-form';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'qt-account-quotes-page',
  template: require('./account-quotes-page.component.html'),
  styles: [require('./account-quotes-page.component.less')],
  pipes: [AsyncPipe],
  directives: [XWrapperComponent, XButtonComponent, XListComponent, XListItemComponent, XListItemContentComponent,
    XListItemActionsComponent, XDialogConfirmComponent, QtAccountQuoteAddFormComponent, XFormMessageComponent,
    QtAccountQuoteEditFormComponent, XModalFormComponent, XBoxComponent, XBoxHeaderComponent, XBoxContentComponent],
})
export class QtAccountQuotesPageComponent implements OnDestroy {
  @select(state => state.quotes) private quotes$;
  @select(state => state.user.getIn(['user', '_id'])) private userId$;

  private quotesItems$: Observable<Array<Object>>;

  private isSaveQuoteSuccess$: Observable<boolean>;
  private isSaveQuoteError$: Observable<boolean>;

  private isUpdateQuoteModalVisible$: Observable<boolean>;
  private isUpdateQuoteSuccess$: Observable<boolean>;
  private isUpdateQuoteError$: Observable<boolean>;
  private updateQuoteItem$: Observable<any>;

  private isRemoveQuoteConfirmVisible$: Observable<boolean>;
  private removeQuoteItem$: Observable<any>;
  private removeQuoteItemName$: Observable<string>;

  constructor(private quotesActions: QuotesActions) {
    this.quotesActions.fetchQuotes();

    this.quotesItems$ = this.quotes$.map(s => s.getIn(['quotes', 'items']).toJS());

    this.isSaveQuoteSuccess$ = this.quotes$.map(s => s.getIn(['saveQuote', 'isSuccess']));
    this.isSaveQuoteError$ = this.quotes$.map(s => s.getIn(['saveQuote', 'isError']));

    this.isUpdateQuoteModalVisible$ = this.quotes$.map(s => s.getIn(['updateQuote', 'isModalVisible']));
    this.isUpdateQuoteSuccess$ = this.quotes$.map(s => s.getIn(['updateQuote', 'isSuccess']));
    this.isUpdateQuoteError$ = this.quotes$.map(s => s.getIn(['updateQuote', 'isError']));
    this.updateQuoteItem$ = this.quotes$.map(s => s.getIn(['updateQuote', 'item']).toJS());

    this.isRemoveQuoteConfirmVisible$ = this.quotes$.map(s => s.getIn(['removeQuote', 'isConfirmVisible']));
    this.removeQuoteItem$ = this.quotes$.map(s => s.getIn(['removeQuote', 'item']).toJS());
    this.removeQuoteItemName$ = this.quotes$.map(s => s.getIn(['removeQuote', 'item', 'name']));
  }

  handleRemoveQuote() {
    let quote: Object = {};

    this.removeQuoteItem$.first()
      .subscribe(result => { quote = result; });

    this.quotesActions.removeQuote(quote);
  }

  ngOnDestroy() {
    this.quotes$.unsubscribe();
    this.userId$.unsubscribe();
  }
}
