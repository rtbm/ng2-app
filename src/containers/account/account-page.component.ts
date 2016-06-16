import { Component, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { QtAsideMenuComponent } from '../aside/aside-menu.component';
import { select } from 'ng2-redux/lib/index';

@Component({
  selector: 'qt-account-page',
  directives: [ROUTER_DIRECTIVES, QtAsideMenuComponent],
  template: require('./account-page.component.html'),
  styles: [require('./account-page.component.less')]
})

export class QtAccountPageComponent implements OnDestroy {
  @select(state => state.session.get('isAuthorized')) private isAuthorized$;

  constructor(private router: Router) {
    this.isAuthorized$.subscribe((isAuthorized: boolean) => {
      if (!isAuthorized) {
        // this.router.navigate(['/user/signin']);
      }
    });
  }

  ngOnDestroy() {
    this.isAuthorized$.unsubscribe();
  }
}
