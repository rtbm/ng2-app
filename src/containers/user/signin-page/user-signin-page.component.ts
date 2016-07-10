import { Component, OnDestroy } from '@angular/core';
import { QtUserSigninFormComponent } from '../signin-form';
import { AsyncPipe } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {
  XWrapperComponent,
  XFormMessageComponent,
  XBoxContentComponent,
  XBoxHeaderComponent,
  XBoxComponent,
} from '../../../components';
import { UserActions } from '../../../actions';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'qt-user-signin-page',
  template: require('./user-signin-page.component.html'),
  styles: [require('./user-signin-page.component.less')],
  directives: [ROUTER_DIRECTIVES, QtUserSigninFormComponent, XWrapperComponent, XFormMessageComponent,
    QtUserSigninFormComponent, XBoxComponent, XBoxHeaderComponent, XBoxContentComponent],
  pipes: [AsyncPipe],
})

export class QtUserSigninPageComponent implements OnDestroy {
  @select(state => state.user) private user$;

  private isSigninError$: Observable<number>;
  private signinErrorCode$: Observable<number>;

  constructor(private userActions: UserActions) {
    this.isSigninError$ = this.user$.map(s => s.getIn(['signin', 'isError']));
    this.signinErrorCode$ = this.user$.map(s => s.getIn(['signin', 'errorCode']));
  }

  ngOnDestroy() {
    this.user$.unsubscribe();
  }
}
