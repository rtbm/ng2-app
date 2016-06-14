import { Component, Output, EventEmitter } from '@angular/core';
import { XOverlayComponent } from '../../components/overlay/overlay.component';
import { FormBuilder, Validators, ControlGroup, Control } from '@angular/common';
import { select } from 'ng2-redux';
import {
  XFormComponent,
  XFormInputComponent,
  XFormGroupComponent,
  XFormTextareaComponent
} from '../../components/form';
import { XModalContentComponent } from '../../components/modal';
import { XButtonComponent } from '../../components/button';

@Component({
  selector: 'qt-dashboard-quote-edit',
  directives: [XOverlayComponent, XButtonComponent, XFormComponent, XFormGroupComponent, XFormInputComponent,
    XModalContentComponent, XFormTextareaComponent],
  template: require('./dashboard-quote-edit.component.html'),
  styles: [require('./dashboard-quote-edit.component.less')],
})
export class QtDashboardQuoteEditComponent {
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
}
