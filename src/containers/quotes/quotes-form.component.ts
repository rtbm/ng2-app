import { Component, OnChanges, Input } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators } from '@angular/common';
import { XFormComponent } from '../../components/form';
import { XFormGroupComponent } from '../../components/form';
import { XFormTextareaComponent } from '../../components/form';
import { XFormActionsComponent } from '../../components/form';
import { XButtonComponent } from '../../components/button';
import { QuoteActions } from '../../actions/quote';
import { XFormInputComponent } from '../../components/form';

@Component({
  selector: 'qt-quotes-form',
  directives: [FORM_DIRECTIVES, XFormComponent, XFormGroupComponent, XFormTextareaComponent, XFormActionsComponent,
    XButtonComponent, XFormInputComponent],
  template: require('./quotes-form.component.html'),
  styles: [require('./quotes-form.component.less')],
})

export class QtQuotesFormComponent implements OnChanges {
  @Input() quote;

  private form: ControlGroup;
  private name: Control;
  private content: Control;
  private url: Control;

  constructor(
    private builder: FormBuilder,
    private quoteActions: QuoteActions
  ) {
    this.name = new Control('', Validators.required);
    this.content = new Control('', Validators.required);
    this.url = new Control('', Validators.required);

    this.form = this.builder.group({
      name: this.name,
      content: this.content,
      url: this.url,
    });
  }

  handleSubmit() {
    if (this.form.status !== 'VALID') return false;
    this.quoteActions.save(this.form.value);
  }

  ngOnChanges(values) {
    if(values.quote) {
      this.name.updateValue(values.quote.currentValue.name);
      this.content.updateValue(values.quote.currentValue.content);
      this.url.updateValue(values.quote.currentValue.url);
    }
  }
}
