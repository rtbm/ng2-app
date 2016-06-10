import { Component } from '@angular/core';
import { QtDashboardListComponent } from './dashboard-list.component';
import { XListComponent } from '../../components/list';
import { QtQuotesCreateForm } from '../quotes/quotes-form.component';
import { XListHeaderComponent } from '../../components/list';

@Component({
  selector: 'qt-dashboard',
  directives: [QtDashboardListComponent, QtQuotesCreateForm, XListComponent, XListHeaderComponent],
  template: require('./dashboard-page.component.html'),
})

export class QtDashboardPageComponent {
}
