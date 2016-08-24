import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import {
  XFormComponent,
  XFormInputComponent,
  XFormCheckboxComponent,
  XFormGroupComponent,
  XFormTextareaComponent,
  XButtonComponent,
  XLabelComponent,
  XFormContentComponent,
} from '../../../components';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'qt-account-quote-edit-form',
  template: require('./account-quote-edit-form.component.html'),
  styles: [require('./account-quote-edit-form.component.scss')],
  directives: [XButtonComponent, XFormComponent, XFormGroupComponent, XFormInputComponent, XFormCheckboxComponent,
    XFormTextareaComponent, XLabelComponent, XFormContentComponent],
})
export class QtAccountQuoteEditFormComponent implements OnChanges {
  @Output() private onSubmit = new EventEmitter();
  @Output() private onCancel = new EventEmitter();
  @Input() private quoteModel;

  private form: FormGroup;
  private _id: FormControl;
  private name: FormControl;
  private content: FormControl;
  private url: FormControl;
  private private: FormControl;

  constructor(private builder: FormBuilder) {
    this._id = new FormControl('', Validators.required);
    this.name = new FormControl('', Validators.required);
    this.content = new FormControl('', Validators.required);
    this.url = new FormControl('', Validators.required);
    this.private = new FormControl(false);

    this.form = this.builder.group({
      _id: this._id,
      name: this.name,
      content: this.content,
      url: this.url,
      private: this.private,
    });
  }

  ngOnChanges(values) {
    if (this._id.value || !values.quoteModel.currentValue._id) {
      return false;
    }

    Object.keys(values.quoteModel.currentValue).map(key => {
      if (this[key] && this[key] instanceof FormControl) {
        this[key].setValue(values.quoteModel.currentValue[key]);
      }
    });
  }

  handleSubmit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }
}
