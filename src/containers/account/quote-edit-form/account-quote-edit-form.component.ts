import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import {
  XFormComponent,
  XFormInputComponent,
  XFormGroupComponent,
  XFormTextareaComponent,
  XButtonComponent,
  XLabelComponent,
  XFormContentComponent,
} from '../../../components';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { select } from 'ng2-redux';

@Component({
  selector: 'qt-account-quote-edit-form',
  template: require('./account-quote-edit-form.component.html'),
  styles: [require('./account-quote-edit-form.component.less')],
  directives: [XButtonComponent, XFormComponent, XFormGroupComponent, XFormInputComponent,
    XFormTextareaComponent, XLabelComponent, XFormContentComponent],
})
export class QtAccountQuoteEditFormComponent implements OnDestroy {
  @select(state => state.quotes.getIn(['updateQuote', 'item'])) private updateQuote$;

  @Output() onCancel = new EventEmitter();
  @Output() onSubmit = new EventEmitter();

  private form: FormGroup;
  private _id: FormControl;
  private name: FormControl;
  private content: FormControl;
  private url: FormControl;

  constructor(private builder: FormBuilder) {
    this._id = new FormControl('', Validators.required);
    this.name = new FormControl('', Validators.required);
    this.content = new FormControl('', Validators.required);
    this.url = new FormControl('', Validators.required);

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
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }

  ngOnDestroy() {
    this.updateQuote$.unsubscribe();
  }
}
