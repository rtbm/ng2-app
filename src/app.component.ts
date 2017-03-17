import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { createEpicMiddleware, Epic } from 'redux-observable';
import { NgRedux } from '@angular-redux/store';
import rootReducer, { IAppState, middlewares, enhancers } from './state';
import { UserEpics, ProfileEpics, QuotesEpics, UsersEpics } from './epics';

@Component({
  selector: 'qt-app',
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
      this.quotesEpics.recommendQuote,
      this.quotesEpics.unrecommendQuote,
      this.usersEpics.fetchUsers,
      this.usersEpics.followUser,
      this.usersEpics.unfollowUser,
    ];

    const epicsMiddlewares = epics.reduce((acc: any[], epic: any) => acc.concat(createEpicMiddleware(epic)), []);

    ngRedux.configureStore(rootReducer, {}, [...middlewares, ...epicsMiddlewares], enhancers);
  }
}
