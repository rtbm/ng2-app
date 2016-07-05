import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import {
  XButtonComponent,
  XFormComponent,
  XFormGroupComponent,
  XLabelComponent,
  XFormActionsComponent,
  XFormContentComponent,
} from '../../../components';
import { select } from 'ng2-redux';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'qt-account-circles-select-form',
  directives: [XButtonComponent, XFormComponent, XFormGroupComponent, XFormActionsComponent, XLabelComponent,
    XFormContentComponent],
  template: require('./account-circles-select-form.component.html'),
  styles: [require('./account-circles-select-form.component.less')],
})
export class QtAccountCirclesSelectFormComponent implements OnDestroy {
  @Output() onSubmit = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  @select(state => state.circles.get('circles')) private circles$;

  private circles;
  private form: FormGroup;

  constructor(private builder: FormBuilder) {
    this.form = this.builder.group({});

    this.circles$.subscribe((circles: any) => {
      this.circles = circles.toJS();
    });
  }

  ngOnDestroy() {
    this.circles$.unsubscribe();
  }
}
