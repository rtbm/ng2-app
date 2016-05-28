import {Component, Input, Output, EventEmitter} from "@angular/core";
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators} from "@angular/common";
import {Article} from "../../services/articles";
import {XFormComponent} from "../atoms/form/form";
import {XFormGroupComponent} from "../atoms/form/form-group";
import {XLabelComponent} from "../atoms/form/label";
import {XInputComponent} from "../atoms/form/input";
import {XButtonComponent} from "../atoms/form/button";
import {XTextareaComponent} from "../atoms/form/textarea";

@Component({
  selector: 'x-article-form',
  directives: [FORM_DIRECTIVES, XFormComponent, XLabelComponent, XInputComponent, XButtonComponent,
    XTextareaComponent, XFormGroupComponent],
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
  `,
})
export class XArticleFormComponent {
  @Input() private article: Article = {name: '', content: ''};
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
    this.onSubmit.emit(this.form.value);
  }
}
