import { Component, OnDestroy } from '@angular/core';
import { QtUserSigninFormComponent } from './user-signin-form.component';
import { AsyncPipe } from '@angular/common';
import { select } from 'ng2-redux';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { XWrapperComponent } from '../../components/wrapper/wrapper.component';
import { XFormMessageComponent } from '../../components/form/form-message.component';

@Component({
  selector: 'qt-user-signin-page',
  pipes: [AsyncPipe],
  directives: [ROUTER_DIRECTIVES, QtUserSigninFormComponent, XWrapperComponent, XFormMessageComponent,
    QtUserSigninFormComponent],
  template: require('./user-signin-page.component.html'),
  styles: [require('./user-signin-page.component.less')],
})

export class QtUserSigninPageComponent implements OnDestroy {
  @select(state => state.session.get('isAuthorized')) private isAuthorized$;

  constructor(private router: Router) {
    /*this.isAuthorized$.subscribe((result: boolean) => {
      if (result) {
        this.router.navigate(['/account/dashboard']);
      }
    });*/
  }

  ngOnDestroy() {
    this.isAuthorized$.unsubscribe();
  }
}
