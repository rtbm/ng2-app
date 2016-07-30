import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { UserActions } from '../../../actions';
import { XButtonComponent, XMenuComponent, XMenuItemComponent } from '../../../components';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';

@Component({
  selector: 'qt-account-header',
  template: require('./account-header.component.html'),
  styles: [require('./account-header.component.scss')],
  directives: [XButtonComponent, XMenuComponent, XMenuItemComponent],
})
export class QtAccountHeaderComponent {
  @select(state => state.user.get('id_token')) private id_token$;

  private user: Object;

  constructor(private userActions: UserActions) {
    this.id_token$
      .filter(id_token => !!id_token)
      .subscribe((id_token: string) => {
        this.user = new JwtHelper().decodeToken(id_token);
      });
  }

  handleLogoutClick() {
    this.userActions.signout();
  }
}
