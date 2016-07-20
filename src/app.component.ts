import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import rootReducer, { IAppState } from './reducers';
import { createEpicMiddleware } from 'redux-observable';
import { middlewares } from './state';
import { NgRedux } from 'ng2-redux';
import { UserEpics, CirclesEpics, ProfileEpics, QuotesEpics, UsersEpics } from './epics';
import { enhancers } from './state/enhancers';

@Component({
  selector: 'qt-app',
  directives: [ROUTER_DIRECTIVES],
  template: `<router-outlet></router-outlet>`,
  styles: [require('./app.component.less')],
  encapsulation: ViewEncapsulation.None,
})

export class QtAppComponent {
  constructor(private ngRedux: NgRedux<IAppState>,
              private router: Router,
              private userEpics: UserEpics,
              private circlesEpics: CirclesEpics,
              private profileEpics: ProfileEpics,
              private quotesEpics: QuotesEpics,
              private usersEpics: UsersEpics) {

    middlewares.push(createEpicMiddleware(this.userEpics.signin));
    middlewares.push(createEpicMiddleware(this.userEpics.signup));
    middlewares.push(createEpicMiddleware(this.userEpics.resetPassword));
    middlewares.push(createEpicMiddleware(this.userEpics.changePassword));

    middlewares.push(createEpicMiddleware(this.circlesEpics.fetchCircles));
    middlewares.push(createEpicMiddleware(this.circlesEpics.saveCircle));
    middlewares.push(createEpicMiddleware(this.circlesEpics.updateCircleModal));
    middlewares.push(createEpicMiddleware(this.circlesEpics.updateCircle));
    middlewares.push(createEpicMiddleware(this.circlesEpics.removeCircle));

    middlewares.push(createEpicMiddleware(this.profileEpics.fetchUser));
    middlewares.push(createEpicMiddleware(this.profileEpics.updateUser));

    middlewares.push(createEpicMiddleware(this.quotesEpics.fetchQuotes));
    middlewares.push(createEpicMiddleware(this.quotesEpics.saveQuote));
    middlewares.push(createEpicMiddleware(this.quotesEpics.updateQuoteModal));
    middlewares.push(createEpicMiddleware(this.quotesEpics.updateQuote));
    middlewares.push(createEpicMiddleware(this.quotesEpics.removeQuote));

    middlewares.push(createEpicMiddleware(this.usersEpics.fetchUsers));
    middlewares.push(createEpicMiddleware(this.usersEpics.inviteUser));
    middlewares.push(createEpicMiddleware(this.usersEpics.followUser));

    ngRedux.configureStore(rootReducer, {}, middlewares, enhancers);
  }
}
