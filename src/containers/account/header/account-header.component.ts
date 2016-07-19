import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Rx';
import { AsyncPipe } from '@angular/common';
import { UserActions } from '../../../actions';
import { XButtonComponent, XMenuComponent, XMenuItemComponent } from '../../../components';

@Component({
  selector: 'qt-account-header',
  template: require('./account-header.component.html'),
  styles: [require('./account-header.component.less')],
  directives: [XButtonComponent, XMenuComponent, XMenuItemComponent],
  pipes: [AsyncPipe],
})
export class QtAccountHeaderComponent {
  @select(state => state.session) private session$;

  private userEmail$: Observable<string>;

  constructor(private userActions: UserActions) {
    this.userEmail$ = this.session$.map(n => n.getIn(['user', 'email']));
  }

  handleLogoutClick() {
    this.userActions.logout();
  }
}
