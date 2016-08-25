import { Component } from '@angular/core';
import {
  XWrapperComponent,
  XButtonComponent,
  XDialogConfirmComponent,
  XModalFormComponent,
  XBoxComponent,
  XBoxHeaderComponent,
  XBoxContentComponent,
  XFormMessageComponent,
  XBoxFooterComponent,
} from '../../../components';
import { Title } from '@angular/platform-browser';
import { select } from 'ng2-redux';
import { QuotesActions } from '../../../actions';
import { QtAccountQuoteAddFormComponent } from '../quote-add-form';
import { QtAccountQuoteEditFormComponent } from '../quote-edit-form';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'qt-account-quotes-page',
  template: require('./account-quotes-page.component.html'),
  styles: [require('./account-quotes-page.component.scss')],
  pipes: [AsyncPipe],
  directives: [XWrapperComponent, XButtonComponent, XDialogConfirmComponent, QtAccountQuoteAddFormComponent,
    XFormMessageComponent, QtAccountQuoteEditFormComponent, XModalFormComponent, XBoxComponent, XBoxHeaderComponent,
    XBoxContentComponent, XBoxFooterComponent],
})
export class QtAccountQuotesPageComponent {
  @select(['user', 'user', '_id']) userId$: Observable<string>;
  @select(['quotes', 'quotes', 'items']) quotesItems$: Observable<any>;
  @select(['quotes', 'quotes', 'isPending']) quotesIsPending$: Observable<boolean>;

  @select(['quotes', 'saveQuote', 'isModalVisible']) isSaveQuoteModalVisible$: Observable<boolean>;
  @select(['quotes', 'saveQuote', 'isSuccess']) isSaveQuoteSuccess$: Observable<boolean>;
  @select(['quotes', 'saveQuote', 'isError']) isSaveQuoteError$: Observable<boolean>;

  @select(['quotes', 'updateQuote', 'isModalVisible']) isUpdateQuoteModalVisible$: Observable<boolean>;
  @select(['quotes', 'updateQuote', 'isSuccess']) isUpdateQuoteSuccess$: Observable<boolean>;
  @select(['quotes', 'updateQuote', 'isError']) isUpdateQuoteError$: Observable<boolean>;
  @select(['quotes', 'updateQuote', 'item']) updateQuoteItem$: Observable<any>;

  @select(['quotes', 'removeQuote', 'isConfirmVisible']) isRemoveQuoteConfirmVisible$: Observable<any>;
  @select(['quotes', 'removeQuote', 'item']) removeQuoteItem$: Observable<any>;
  @select(['quotes', 'removeQuote', 'item', 'name']) removeQuoteItemName$: Observable<any>;

  constructor(private quotesActions: QuotesActions,
              private title: Title) {

    title.setTitle('Account - Quotes | Quotter');

    this.quotesActions.fetchQuotes();
  }

  handleRemoveQuote = () => this.removeQuoteItem$
    .first()
    .subscribe((quote: any) => this.quotesActions.removeQuote(quote.toJS()));
}
