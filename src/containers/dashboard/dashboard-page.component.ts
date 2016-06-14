import { Component } from '@angular/core';
import {
  XListComponent,
  XListItemComponent,
  XListItemContentComponent,
  XListItemActionsComponent
} from '../../components/list';
import { XWrapperComponent } from '../../components/wrapper';
import { select } from 'ng2-redux/lib/index';
import { Observable } from 'rxjs/Rx';
import { DashboardActions } from '../../actions/dashboard';
import { XButtonComponent } from '../../components/button';
import { XDialogConfirmComponent } from '../../components/dialog';
import { QtDashboardQuoteFormComponent } from './dashboard-quote-form';

@Component({
  selector: 'qt-dashboard',
  directives: [XWrapperComponent, XButtonComponent, XListComponent, XListItemComponent, XListItemContentComponent,
    XListItemActionsComponent, XDialogConfirmComponent, QtDashboardQuoteFormComponent],
  template: require('./dashboard-page.component.html'),
  styles: [require('./dashboard-page.component.less')],
})

export class QtDashboardPageComponent {
  @select('dashboard') private dashboard$: Observable<any>;

  private dashboard = undefined;

  constructor(private dashboardActions: DashboardActions) {
    this.dashboardActions.fetchData();

    this.dashboard$.subscribe((dashboard: any) => {
      this.dashboard = dashboard.toJS();
    });
  }

  handleQuoteFormSubmit(newQuote) {
    this.dashboardActions.saveQuote(newQuote);
  }
}
