import { Component, OnDestroy } from '@angular/core';
import { QtUserSignupFormComponent } from './user-signup-form.component';
import { SessionActions } from '../../../actions/session';
import { XWrapperComponent } from '../../../components/wrapper';
import { AsyncPipe } from '@angular/common';
import { select } from 'ng2-redux';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { XFormGroupComponent } from '../../../components/form';
import { XBoxHeaderComponent } from '../../../components/box';
import { XBoxContentComponent } from '../../../components/box';
import { XBoxComponent } from '../../../components/box';

@Component({
  selector: 'qt-user-signup-page',
  pipes: [AsyncPipe],
  directives: [ROUTER_DIRECTIVES, QtUserSignupFormComponent, XWrapperComponent, XFormGroupComponent, XBoxComponent,
    XBoxHeaderComponent, XBoxContentComponent],
  template: require('./user-signup-page.component.html'),
  styles: [require('./user-signup-page.component.less')],
})
export class QtUserSignupPageComponent implements OnDestroy {
  @select(state => state.session.get('isAuthorized')) private isAuthorized$;

  constructor(private sessionActions: SessionActions,
              private router: Router) {
    this.isAuthorized$.subscribe((result: boolean) => {
      if (result) {
        //this.router.navigate(['/account/dashboard']);
      }
    });
  }

  ngOnDestroy() {
    this.isAuthorized$.unsubscribe();
  }
}
