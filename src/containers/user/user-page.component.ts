import { Component, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { QtHeaderComponent } from '../header';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';

@Component({
  selector: 'x-user-page',
  template: require('./user-page.component.html'),
  directives: [ROUTER_DIRECTIVES, QtHeaderComponent],
})

export class QtUserPageComponent implements OnDestroy {
  @select(state => state.user) private user$;

  private userToken$: Observable<string>;

  constructor(private router: Router) {
    this.userToken$ = this.user$.map(s => s.get('id_token'));

    this.userToken$
      .filter(id_token => !!id_token)
      .subscribe((id_token: string) => {
        this.router.navigate(['/account/quotes']);
      });
  }

  ngOnDestroy() {
    this.user$.unsubscribe();
  }
}
