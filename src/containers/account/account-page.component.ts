import { Component, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { QtAccountAsideMenuComponent } from './aside-menu';
import { select } from 'ng2-redux';

@Component({
  selector: 'qt-account-page',
  template: require('./account-page.component.html'),
  styles: [require('./account-page.component.less')],
  directives: [ROUTER_DIRECTIVES, QtAccountAsideMenuComponent],
})
export class QtAccountPageComponent implements OnDestroy {
  @select(state => state.session.get('isAuthorized')) private isAuthorized$;

  constructor(private router: Router) {
    this.isAuthorized$.subscribe((isAuthorized: boolean) => {
      if (!isAuthorized) {
        this.router.navigate(['/user/signin']);
      }
    });
  }

  ngOnDestroy() {
    this.isAuthorized$.unsubscribe();
  }
}
