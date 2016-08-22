import { Component, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { QtAccountAsideMenuComponent } from './aside-menu';
import { select } from 'ng2-redux';
import { QtHeaderComponent } from '../header';
import { Observable } from 'rxjs';

@Component({
  selector: 'qt-account-page',
  template: require('./account-page.component.html'),
  styles: [require('./account-page.component.scss')],
  directives: [ROUTER_DIRECTIVES, QtAccountAsideMenuComponent, QtHeaderComponent],
})
export class QtAccountPageComponent implements OnDestroy {
  @select(['user', 'id_token']) isAuthorized$: Observable<string>;
  @select(state => state.user) private user$;

  constructor(private router: Router) {
    this.isAuthorized$
      .filter(id_token => !id_token)
      .subscribe(() => this.router.navigate(['/user/signin']));
  }

  ngOnDestroy = () => this.user$.unsubscribe();
}
