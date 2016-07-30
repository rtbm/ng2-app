import { Component, OnDestroy } from '@angular/core';
import { QtUserSignupFormComponent } from '../signup-form';
import {
  XWrapperComponent,
  XFormGroupComponent,
  XBoxHeaderComponent,
  XBoxContentComponent,
  XBoxComponent,
  XFormMessageComponent,
} from '../../../components';
import { AsyncPipe } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserActions } from '../../../actions';
import { Observable } from 'rxjs';
import { select } from 'ng2-redux';

@Component({
  selector: 'qt-user-signup-page',
  template: require('./user-signup-page.component.html'),
  styles: [require('./user-signup-page.component.scss')],
  directives: [ROUTER_DIRECTIVES, QtUserSignupFormComponent, XWrapperComponent, XFormGroupComponent, XBoxComponent,
    XBoxHeaderComponent, XBoxContentComponent, XFormMessageComponent],
  pipes: [AsyncPipe],
})

export class QtUserSignupPageComponent implements OnDestroy {
  @select(state => state.user) private user$;

  private isSignupError$: Observable<number>;
  private signupErrorCode$: Observable<number>;

  constructor(private userActions: UserActions) {
    this.isSignupError$ = this.user$.map(s => s.getIn(['signup', 'isError']));
    this.signupErrorCode$ = this.user$.map(s => s.getIn(['signup', 'errorCode']));
  }

  ngOnDestroy() {
    this.user$.unsubscribe();
  }
}
