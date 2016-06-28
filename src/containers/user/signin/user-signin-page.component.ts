import { Component, OnDestroy } from '@angular/core';
import { QtUserSigninFormComponent } from './user-signin-form.component';
import { AsyncPipe } from '@angular/common';
import { select } from 'ng2-redux';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { XWrapperComponent } from '../../../components/wrapper/wrapper.component';
import { XFormMessageComponent } from '../../../components/form/form-message.component';
import { XBoxContentComponent } from '../../../components/box';
import { XBoxHeaderComponent } from '../../../components/box';
import { XBoxComponent } from '../../../components/box';

@Component({
  selector: 'qt-user-signin-page',
  pipes: [AsyncPipe],
  directives: [ROUTER_DIRECTIVES, QtUserSigninFormComponent, XWrapperComponent, XFormMessageComponent,
    QtUserSigninFormComponent, XBoxComponent, XBoxHeaderComponent, XBoxContentComponent],
  template: require('./user-signin-page.component.html'),
  styles: [require('./user-signin-page.component.less')],
})

export class QtUserSigninPageComponent {}
