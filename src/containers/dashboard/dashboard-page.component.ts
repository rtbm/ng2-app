import { Component } from '@angular/core';
import { QtDashboardListComponent } from './dashboard-list.component';
import { XListComponent } from '../../components/list';
import { QtQuotesFormComponent } from '../quotes';
import { XListHeaderComponent } from '../../components/list';
import { XWrapperComponent } from '../../components/wrapper';

@Component({
  selector: 'qt-dashboard',
  directives: [QtDashboardListComponent, QtQuotesFormComponent, XListComponent, XListHeaderComponent,
    XWrapperComponent],
  template: require('./dashboard-page.component.html'),
  styles: [require('./dashboard-page.component.less')],
})

export class QtDashboardPageComponent {
}
