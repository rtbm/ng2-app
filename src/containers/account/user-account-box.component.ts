import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { SessionActions } from '../../actions/session';
import { XButtonComponent } from '../../components/button';
import { XMenuComponent, XMenuItemComponent } from '../../components/menu';

@Component({
  selector: 'x-user-account-box',
  directives: [XButtonComponent, XMenuComponent, XMenuItemComponent],
  pipes: [AsyncPipe],
  template: require('./user-account-box.component.html'),
  styles: [require('./user-account-box.component.less')],
})
export class XUserAccountBoxComponent {
  @Input() private isLogged: boolean = false;
  @Input() private email: string = '';
  @Output() private onSigninClick = new EventEmitter();
  @Output() private onSignupClick = new EventEmitter();

  constructor(private sessionActions: SessionActions,
              private router: Router) {
  }

  handleLogoutClick() {
    this.sessionActions.logout();
    this.router.navigate(['/']);
  }
}
