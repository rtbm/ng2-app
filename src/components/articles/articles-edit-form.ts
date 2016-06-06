import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators } from '@angular/common';
import { Article } from '../../services/articles';
import { XFormComponent } from '../form/form';
import { XFormGroupComponent } from '../form/form-group';
import { XLabelComponent } from '../form/label';
import { XInputComponent } from '../form/input';
import { XButtonComponent } from '../button/button';
import { XTextareaComponent } from '../form/textarea';
import { XFormActionsComponent } from '../form/form-actions';
import { XFormHeaderComponent } from '../form/form-header';

@Component({
  selector: 'x-articles-edit-form',
  directives: [FORM_DIRECTIVES, XFormComponent, XLabelComponent, XInputComponent, XButtonComponent,
    XTextareaComponent, XFormGroupComponent, XFormActionsComponent, XFormHeaderComponent],
  template: `
    <x-form [formModel]="form" (onSubmit)="handleSubmit()">
     <x-form-header>
        <h1>Edit article</h1>
      </x-form-header>
      <x-form-group>
        <x-label>Name</x-label>
        <x-input [formControl]="name" type="text"></x-input>
      </x-form-group>
      <x-form-group>
        <x-label>Body</x-label>
        <x-textarea [formControl]="content"></x-textarea>
      </x-form-group>
      <x-form-actions>
        <x-button size="big" preset="positive" type="submit">Save</x-button>
      </x-form-actions>
    </x-form>
  `,
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
