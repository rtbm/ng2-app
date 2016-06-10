import { Component } from '@angular/core';
import { QtUserSignupFormComponent } from '../account/user-signup-form.component';
import { SessionActions } from '../../actions/session';
import { XWrapperComponent } from '../../components/wrapper/wrapper.component';
import { AsyncPipe } from '@angular/common';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { XFormGroupComponent } from '../../components/form/form-group.component';

@Component({
  selector: 'qt-user-signup-page',
  pipes: [AsyncPipe],
  directives: [ROUTER_DIRECTIVES, QtUserSignupFormComponent, XWrapperComponent, XFormGroupComponent],
  template: require('./user-signup-page.component.html'),
  styles: [require('./user-signup-page.component.less')],
})
export class QtUserSignupPageComponent {
  @select(state => state.session.get('isError')) private isError$: Observable<boolean>;
  @select(state => state.session.get('isPending')) private isPending$: Observable<boolean>;
  @select(state => state.session.get('isAuthorized')) private isAuthorized$: Observable<boolean>;

  constructor(private sessionActions: SessionActions,
              private router: Router) {
    this.isAuthorized$.subscribe((result: boolean) => {
      if (result) {
        this.router.navigate(['/']);
      }
    });
  }
}
