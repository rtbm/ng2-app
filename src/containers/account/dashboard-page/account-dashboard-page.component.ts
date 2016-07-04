import { Component, OnDestroy } from '@angular/core';
import {
  XListComponent,
  XListItemComponent,
  XListItemContentComponent,
  XListItemActionsComponent,
  XWrapperComponent,
  XButtonComponent,
  XDialogConfirmComponent
} from '../../../components';
import { select } from 'ng2-redux';
import { DashboardActions } from '../../../actions';
import { QtAccountQuoteAddFormComponent } from '../quote-add-form';
import { QtAccountQuoteEditFormComponent } from '../quote-edit-form';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'qt-account-dashboard-page',
  template: require('./account-dashboard-page.component.html'),
  styles: [require('./account-dashboard-page.component.less')],
  pipes: [AsyncPipe],
  directives: [XWrapperComponent, XButtonComponent, XListComponent, XListItemComponent, XListItemContentComponent,
    XListItemActionsComponent, XDialogConfirmComponent, QtAccountQuoteAddFormComponent,
    QtAccountQuoteEditFormComponent],
})
export class QtAccountDashboardPageComponent implements OnDestroy {
  @select(state => state.dashboard) private dashboard$;
  @select(state => state.session.getIn(['user', '_id'])) private userId$;

  private dashboard = {};

  constructor(private dashboardActions: DashboardActions) {
    this.dashboardActions.fetchQuotes();

    this.dashboard$.subscribe((dashboard: any) => {
      this.dashboard = dashboard.toJS();
    });
  }

  ngOnDestroy() {
    this.dashboard$.unsubscribe();
    this.userId$.unsubscribe();
  }
}
