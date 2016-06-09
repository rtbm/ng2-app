import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators } from '@angular/common';
import { Article } from '../../services/articles';
import {
  XFormComponent,
  XFormGroupComponent,
  XFormInputComponent,
  XTextareaComponent,
  XFormActionsComponent,
  XFormHeaderComponent
} from '../form';
import { XLabelComponent } from '../label';
import { XButtonComponent } from '../button';

@Component({
  selector: 'x-articles-edit-form',
  directives: [FORM_DIRECTIVES, XFormComponent, XLabelComponent, XFormInputComponent, XButtonComponent,
    XTextareaComponent, XFormGroupComponent, XFormActionsComponent, XFormHeaderComponent],
  template: require('./articles-edit-form.component.html'),
})

export class XArticlesEditFormComponent {
  @Input() private article: Article = { name: '', content: '' };
  @Output() onSubmit = new EventEmitter();

  private form: ControlGroup;
  private name: Control;
  private content: Control;

  constructor(private builder: FormBuilder) {
    this.name = new Control(this.article.name, Validators.required);
    this.content = new Control(this.article.content, Validators.required);

    this.form = this.builder.group({
      name: this.name,
      content: this.content
    });
  }

  ngOnChanges() {
    this.name.updateValue(this.article.name);
    this.content.updateValue(this.article.content);
  }

  handleSubmit() {
    if (this.form.status !== 'VALID') return false;
    this.onSubmit.emit(this.form.value);
  }
}