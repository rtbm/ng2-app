import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import {
  XOverlayComponent,
  XFormComponent,
  XFormInputComponent,
  XFormGroupComponent,
  XFormTextareaComponent,
  XModalContentComponent,
  XModalActionsComponent,
  XModalMessageComponent,
  XButtonComponent,
  XLabelComponent,
} from '../../../components';
import { FormBuilder, Validators, ControlGroup, Control } from '@angular/common';
import { select } from 'ng2-redux';

@Component({
  selector: 'qt-account-quote-edit-form',
  template: require('./account-quote-edit-form.component.html'),
  styles: [require('./account-quote-edit-form.component.less')],
  directives: [XOverlayComponent, XButtonComponent, XFormComponent, XFormGroupComponent, XFormInputComponent,
    XModalMessageComponent, XModalContentComponent, XModalActionsComponent, XFormTextareaComponent, XLabelComponent],
})
export class QtAccountQuoteEditFormComponent implements OnDestroy {
  @select(state => state.dashboard.getIn(['updateQuote', 'item'])) private updateQuote$;

  @Output() onCancel = new EventEmitter();
  @Output() onSubmit = new EventEmitter();

  private form: ControlGroup;
  private _id: Control;
  private name: Control;
  private content: Control;
  private url: Control;

  constructor(private builder: FormBuilder) {
    this._id = new Control('', Validators.required);
    this.name = new Control('', Validators.required);
    this.content = new Control('', Validators.required);
    this.url = new Control('', Validators.required);

    this.form = this.builder.group({
      _id: this._id,
      name: this.name,
      content: this.content,
      url: this.url,
    });

    this.updateQuote$.subscribe((updateQuote: any) => {
      this._id.updateValue(updateQuote.get('_id'));
      this.name.updateValue(updateQuote.get('name'));
      this.content.updateValue(updateQuote.get('content'));
      this.url.updateValue(updateQuote.get('url'));
    });
  }

  handleSubmit() {
    this.onSubmit.emit(this.form.value);
  }

  ngOnDestroy() {
    this.updateQuote$.unsubscribe();
  }
}
