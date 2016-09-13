import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';

@Component({
  selector: 'x-user-page',
  template: require('./user-page.component.html'),
})

export class QtUserPageComponent implements OnDestroy {
  @select(state => state.user) private user$;

  private isAuthorized$: Observable<boolean>;

  constructor(private router: Router) {
    this.isAuthorized$ = this.user$.map(s => !!s.get('id_token'));

    this.isAuthorized$
      .filter(id_token => id_token)
      .subscribe(() => this.router.navigate(['/account/quotes']));
  }

  ngOnDestroy = () => this.user$.unsubscribe();
}
