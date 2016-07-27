import { Component, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { QtAccountAsideMenuComponent } from './aside-menu';
import { select } from 'ng2-redux';
import { QtAccountHeaderComponent } from './header';

@Component({
  selector: 'qt-account-page',
  template: require('./account-page.component.html'),
  styles: [require('./account-page.component.less')],
  directives: [ROUTER_DIRECTIVES, QtAccountAsideMenuComponent, QtAccountHeaderComponent],
})
export class QtAccountPageComponent implements OnDestroy {
  @select(state => state.user.get('id_token')) private id_token$;

  constructor(private router: Router) {
    this.id_token$
      .filter(id_token => !id_token)
      .subscribe(() => this.router.navigate(['/user/signin']));
  }

  ngOnDestroy() {
    this.id_token$.unsubscribe();
  }
}
