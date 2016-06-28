import { Component, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { QtHeaderComponent } from '../header';
import { select } from 'ng2-redux';

@Component({
  selector: 'x-user-page',
  directives: [ROUTER_DIRECTIVES, QtHeaderComponent],
  template: require('./user-page.component.html'),
})

export class QtUserPageComponent implements OnDestroy {
  @select(state => state.session.get('isAuthorized')) private isAuthorized$;

  constructor(private router: Router) {
    this.isAuthorized$.subscribe((isAuthorized: boolean) => {
      if (isAuthorized) {
        this.router.navigate(['/account/dashboard']);
      }
    });
  }

  ngOnDestroy() {
    this.isAuthorized$.unsubscribe();
  }
}
