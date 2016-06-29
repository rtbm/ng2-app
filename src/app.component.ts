import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import rootReducer, { IAppState } from './reducers';
import { middlewares, enhancers } from './state';
import { NgRedux } from 'ng2-redux';

@Component({
  selector: 'qt-app',
  directives: [ROUTER_DIRECTIVES],
  template: `<router-outlet></router-outlet>`,
  styles: [require('./app.component.less')],
  encapsulation: ViewEncapsulation.None,
})

export class QtAppComponent {
  constructor(private ngRedux: NgRedux<IAppState>,
              private router: Router) {
    ngRedux.configureStore(rootReducer, {}, middlewares, enhancers);
  }
}
