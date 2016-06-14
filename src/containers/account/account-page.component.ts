import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { QtDashboardPageComponent } from '../dashboard/dashboard-page.component';
import { QtAsideMenuComponent } from '../aside/aside-menu.component';
import { Observable } from 'rxjs/Rx';
import { select } from 'ng2-redux/lib/index';

@Component({
  selector: 'qt-account-page',
  directives: [ROUTER_DIRECTIVES, QtAsideMenuComponent],
  template: require('./account-page.component.html'),
  styles: [require('./account-page.component.less')]
})

@Routes([{
  path: '/dashboard',
  component: QtDashboardPageComponent
}])

export class QtAccountPageComponent {
  @select(state => state.session.get('isAuthorized')) private isAuthorized$: Observable<boolean>;

  constructor(private router: Router) {
    this.isAuthorized$.subscribe((isAuthorized: boolean) => {
      if (!isAuthorized) {
        return this.router.navigate(['/user/signin']);
      }
    });
  }
}
