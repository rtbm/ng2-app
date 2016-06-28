import { Component } from '@angular/core';
import { QtUserSignupFormComponent } from './user-signup-form.component';
import { XWrapperComponent } from '../../../components/wrapper';
import { AsyncPipe } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { XFormGroupComponent } from '../../../components/form';
import { XBoxHeaderComponent } from '../../../components/box';
import { XBoxContentComponent } from '../../../components/box';
import { XBoxComponent } from '../../../components/box';

@Component({
  selector: 'qt-user-signup-page',
  pipes: [AsyncPipe],
  directives: [ROUTER_DIRECTIVES, QtUserSignupFormComponent, XWrapperComponent, XFormGroupComponent, XBoxComponent,
    XBoxHeaderComponent, XBoxContentComponent],
  template: require('./user-signup-page.component.html'),
  styles: [require('./user-signup-page.component.less')],
})

export class QtUserSignupPageComponent {}
