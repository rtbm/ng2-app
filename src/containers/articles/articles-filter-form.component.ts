import { Component, Output, EventEmitter } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control } from '@angular/common';
import { XFormComponent, XFormGroupComponent, XFormInputComponent } from '../../components/form';
import { XLabelComponent } from '../../components/label';
import { XButtonComponent } from '../../components/button';

@Component({
  selector: 'x-articles-filter-form',
  directives: [FORM_DIRECTIVES, XFormComponent, XLabelComponent, XFormInputComponent, XButtonComponent,
    XFormGroupComponent],
  template: require('./articles-filter-form.component.html'),
})

export class XArticlesFilterFormComponent {
  @Output() private onKeyUp = new EventEmitter();

  private form: ControlGroup;
  private phrase: Control;

  constructor(private builder: FormBuilder) {
    this.phrase = new Control('');

    this.form = this.builder.group({
      phrase: this.phrase,
    });
  }

  handleKeyUp() {
    this.onKeyUp.emit(this.form.value);
  }
}
