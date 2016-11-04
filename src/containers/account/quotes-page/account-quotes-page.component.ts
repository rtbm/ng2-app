import { Component, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { select } from 'ng2-redux';
import { QuotesActions } from '../../../actions';
import { Observable, Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'qt-account-quotes-page',
  template: require('./account-quotes-page.component.html'),
  styles: [require('./account-quotes-page.component.scss')],
})
export class QtAccountQuotesPageComponent implements OnDestroy {
  @select(['user', 'user', '_id']) userId$: Observable<string>;
  @select(['quotes', 'quotes', 'items']) quotesItems$: Observable<any>;
  @select(['quotes', 'quotes', 'isPending']) quotesIsPending$: Observable<boolean>;
  @select(['quotes', 'quotes', 'pagination']) quotesPagination$: Observable<any>;

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

  private routeParamsSubscription: Subscription;
  private params: any;

  constructor(private quotesActions: QuotesActions,
              private title: Title,
              private router: Router,
              private route: ActivatedRoute) {

    title.setTitle('Account - Quotes | Quotter');

    this.routeParamsSubscription = this.route.params
      .subscribe((params: any) => this.fetchQuotes(params));
  }

  fetchQuotes = (params: { search, page }) => {
    this.params = params;
    this.quotesActions.fetchQuotes(params);
  };

  searchQuotes = search => this.router.navigate(['.', { search }], { relativeTo: this.route });

  handleRemoveQuote = () => this.removeQuoteItem$.first()
    .subscribe((quote: any) => this.quotesActions.removeQuote(quote.toJS()));

  ngOnDestroy = () => this.routeParamsSubscription.unsubscribe();
}
