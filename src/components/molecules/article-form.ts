import {Component, Output, EventEmitter} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators} from '@angular/common';
import {XFormComponent} from '../atoms/form/form';
import {XLabelComponent} from '../atoms/form/label';
import {XInputComponent} from '../atoms/form/input';
import {XButtonComponent} from '../atoms/form/button';
import {XTextareaComponent} from '../atoms/form/textarea';

@Component({
  selector: 'x-article-form',
  directives: [FORM_DIRECTIVES, XFormComponent, XLabelComponent, XInputComponent, XButtonComponent,
    XTextareaComponent],
  template: `
    <x-form [formModel]="form" (onSubmit)="handleSubmit()">
      <x-form-group>
          <x-label>Name</x-label>
          <x-input [formControl]="name" type="text"></x-input>
      </x-form-group>
      <x-form-group>
          <x-label>Body</x-label>
          <x-textarea [formControl]="content"></x-textarea>
      </x-form-group>
      <x-form-group>
        <x-button type="submit">Save</x-button>
      </x-form-group>
    </x-form>
  `
})
export class XArticleFormComponent {
  @Output() onSubmit = new EventEmitter();

  private form: ControlGroup;
  private name: Control;
  private content: Control;

  constructor(private builder: FormBuilder) {
    this.name = new Control('', Validators.required);
    this.content = new Control('', Validators.required);

    this.form = this.builder.group({
      name: this.name,
      content: this.content
    });
  }

  handleSubmit() {
    this.onSubmit.emit(this.form.value);
  }
}
