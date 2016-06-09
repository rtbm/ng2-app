import { Component, Output, EventEmitter } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control } from '@angular/common';
import { XFormComponent, XFormGroupComponent, XFormInputComponent } from '../form';
import { XLabelComponent } from '../label';
import { XButtonComponent } from '../button';

@Component({
  selector: 'x-articles-filter-form',
  directives: [FORM_DIRECTIVES, XFormComponent, XLabelComponent, XFormInputComponent, XButtonComponent,
    XFormGroupComponent],
  template: `
    
  `,
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
