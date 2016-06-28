import { Component, OnDestroy } from '@angular/core';
import {
  XListComponent,
  XListItemComponent,
  XListItemContentComponent,
  XListItemActionsComponent
} from '../../components/list';
import { XWrapperComponent } from '../../components/wrapper';
import { select } from 'ng2-redux/lib/index';
import { DashboardActions } from '../../actions/dashboard';
import { XButtonComponent } from '../../components/button';
import { XDialogConfirmComponent } from '../../components/dialog';
import { QtDashboardQuoteAddComponent } from './dashboard-quote-add';
import { QtDashboardQuoteEditComponent } from './dashboard-quote-edit';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'qt-dashboard',
  pipes: [AsyncPipe],
  directives: [XWrapperComponent, XButtonComponent, XListComponent, XListItemComponent, XListItemContentComponent,
    XListItemActionsComponent, XDialogConfirmComponent, QtDashboardQuoteAddComponent,
    QtDashboardQuoteEditComponent],
  template: require('./dashboard-page.component.html'),
  styles: [require('./dashboard-page.component.less')],
})

export class QtDashboardPageComponent implements OnDestroy {
  @select('dashboard') private dashboard$;
  @select(state => state.session.getIn(['user', '_id'])) private userId$;

  private dashboard: Object = {};

  constructor(private dashboardActions: DashboardActions) {
    this.dashboardActions.fetchData();

    this.dashboard$.subscribe((dashboard: any) => {
      this.dashboard = dashboard.toJS();
    });
  }

  ngOnDestroy() {
    this.dashboard$.unsubscribe();
    this.userId$.unsubscribe();
  }
}
