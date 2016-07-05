import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import {
  XOverlayComponent,
  XModalContentComponent,
  XButtonComponent,
  XModalActionsComponent,
  XFormComponent,
  XFormGroupComponent,
  XLabelComponent,
  XModalMessageComponent,
} from '../../../components';
import { select } from 'ng2-redux';
import { ControlGroup, FormBuilder } from '@angular/common';
import { IAppState } from '../../../reducers';
import { NgRedux } from 'ng2-redux';

@Component({
  selector: 'qt-account-circles-modal',
  directives: [XOverlayComponent, XModalContentComponent, XModalActionsComponent, XButtonComponent, XFormComponent,
    XFormGroupComponent, XLabelComponent, XModalMessageComponent],
  template: require('./account-circles-modal.component.html'),
  styles: [require('./account-circles-modal.component.less')],
})
export class QtAccountCirclesModalComponent implements OnDestroy {
  @Output() onSubmit = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  @select(state => state.circles.get('circles')) private circles$;

  private circles = {};
  private form: ControlGroup;

  constructor(
    private builder: FormBuilder,
    private ngRedux: NgRedux<IAppState>
  ) {
    this.form = this.builder.group({});

    this.circles$.subscribe((circles: any) => {
      this.circles = circles.toJS();
    });
  }

  ngOnDestroy() {
    this.circles$.unsubscribe();
  }
}
