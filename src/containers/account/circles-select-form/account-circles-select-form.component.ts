import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import {
  XButtonComponent,
  XFormComponent,
  XFormGroupComponent,
  XFormActionsComponent,
  XFormContentComponent,
} from '../../../components';
import { select } from 'ng2-redux';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'qt-account-circles-select-form',
  directives: [XButtonComponent, XFormComponent, XFormGroupComponent, XFormActionsComponent,
    XFormContentComponent],
  template: require('./account-circles-select-form.component.html'),
  styles: [require('./account-circles-select-form.component.less')],
})
export class QtAccountCirclesSelectFormComponent implements OnDestroy {
  @Output() onSubmit = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  @select(state => state.circles.get('circles')) private circles$;

  private circlesItems$: Observable<any>;
  private form: FormGroup;

  constructor(private builder: FormBuilder) {
    this.form = this.builder.group({});
    this.circlesItems$ = this.circles$.map(s => s.get('items').toJS());
  }

  ngOnDestroy() {
    this.circles$.unsubscribe();
  }
}
