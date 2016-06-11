import { Component } from '@angular/core';
import { QtUserSigninFormComponent } from './user-signin-form.component';
import { SessionActions } from '../../actions/session';
import { AsyncPipe } from '@angular/common';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
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

export class QtUserSigninPageComponent {
  @select(state => state.session.get('isAuthorized')) private isAuthorized$: Observable<boolean>;

  constructor(private router: Router) {
    this.isAuthorized$.subscribe((result: boolean) => {
      if (result) {
        this.router.navigate(['/']);
      }
    });
  }
}
