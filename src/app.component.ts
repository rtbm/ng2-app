import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import rootReducer, { IAppState } from './reducers';
import { createEpicMiddleware, Epic } from 'redux-observable';
import { middlewares } from './state';
import { NgRedux } from 'ng2-redux';
import { UserEpics, ProfileEpics, QuotesEpics, UsersEpics } from './epics';
import { enhancers } from './state/enhancers';

@Component({
  selector: 'qt-app',
  directives: [ROUTER_DIRECTIVES],
  template: `<router-outlet></router-outlet>`,
  styles: [require('./app.component.scss')],
  encapsulation: ViewEncapsulation.None,
})

export class QtAppComponent {
  constructor(private ngRedux: NgRedux<IAppState>,
              private router: Router,
              private userEpics: UserEpics,
              private profileEpics: ProfileEpics,
              private quotesEpics: QuotesEpics,
              private usersEpics: UsersEpics) {
    const epics = [
      this.userEpics.signin,
      this.userEpics.signup,
      this.userEpics.resetPassword,
      this.userEpics.changePassword,
      this.profileEpics.fetchUser,
      this.profileEpics.updateUser,
      this.quotesEpics.fetchQuotes,
      this.quotesEpics.saveQuote,
      this.quotesEpics.updateQuoteModal,
      this.quotesEpics.updateQuote,
      this.quotesEpics.removeQuote,
      this.usersEpics.fetchUsers,
      this.usersEpics.followUser,
      this.usersEpics.unfollowUser,
    ];

    const epicsMiddlewares = epics.reduce(
        (acc: Array<any>, epic: any) => acc.concat(createEpicMiddleware(<Epic> epic)), []
    );

    ngRedux.configureStore(rootReducer, {}, [...middlewares, ...epicsMiddlewares], enhancers);
  }
}
