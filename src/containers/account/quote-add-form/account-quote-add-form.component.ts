import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'qt-account-quote-add-form',
  template: require('./account-quote-add-form.component.html'),
  styles: [require('./account-quote-add-form.component.scss')],
})
export class QtAccountQuoteAddFormComponent {
  @Output() private onSubmit = new EventEmitter();
  @Output() private onCancel = new EventEmitter();

  private form: FormGroup;
  private name: FormControl;
  private content: FormControl;
  private url: FormControl;
  private private: FormControl;

  constructor(private builder: FormBuilder) {
    this.name = new FormControl('', Validators.required);
    this.content = new FormControl('', Validators.required);
    this.url = new FormControl('', Validators.required);
    this.private = new FormControl(false);

    this.form = this.builder.group({
      name: this.name,
      content: this.content,
      url: this.url,
      private: this.private,
    });
  }

  handleSubmit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }
}
