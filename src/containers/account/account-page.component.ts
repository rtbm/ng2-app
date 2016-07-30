import { Component, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { QtAccountAsideMenuComponent } from './aside-menu';
import { select } from 'ng2-redux';
import { QtAccountHeaderComponent } from './header';
import { Observable } from 'rxjs';

@Component({
  selector: 'qt-account-page',
  template: require('./account-page.component.html'),
  styles: [require('./account-page.component.scss')],
  directives: [ROUTER_DIRECTIVES, QtAccountAsideMenuComponent, QtAccountHeaderComponent],
})
export class QtAccountPageComponent implements OnDestroy {
  @select(state => state.user) private user$;

  private isAuthorized$: Observable<boolean>;

  constructor(private router: Router) {
    this.isAuthorized$ = this.user$.map(s => !!s.get('id_token'));

    this.isAuthorized$
      .filter(id_token => !id_token)
      .subscribe(() => this.router.navigate(['/user/signin']));
  }

  ngOnDestroy() {
    this.user$.unsubscribe();
  }
}
