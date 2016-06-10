import { Component, EventEmitter, Output } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators } from '@angular/common';
import { XFormComponent } from '../../components/form';
import { XFormGroupComponent } from '../../components/form';
import { XFormTextareaComponent } from '../../components/form';
import { XFormActionsComponent } from '../../components/form';
import { XButtonComponent } from '../../components/button';
import { QuoteActions } from '../../actions/quote';

@Component({
  selector: 'qt-quotes-form',
  directives: [FORM_DIRECTIVES, XFormComponent, XFormGroupComponent, XFormTextareaComponent, XFormActionsComponent,
  XButtonComponent],
  template: require('./quotes-form.component.html'),
  styles: [require('./quotes-form.component.less')],
})

export class QtQuotesCreateForm {
  private form: ControlGroup;
  private content: Control;

  constructor(
    private builder: FormBuilder,
    private quoteActions: QuoteActions
  ) {
    this.content = new Control('', Validators.required);

    this.form = this.builder.group({
      content: this.content
    });
  }

  handleSubmit() {
    if (this.form.status !== 'VALID') return false;
    this.quoteActions.save(this.form.value);
  }
}
