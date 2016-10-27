import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'qt-search-form',
  template: require('./search-form.component.html'),
  styles: [require('./search-form.component.scss')],
})
export class QtSearchFormComponent {
  @Output() private onSubmit = new EventEmitter();

  private form: FormGroup;
  private search: FormControl = new FormControl('');

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      search: this.search,
    });
  }

  handleSubmit = () => this.onSubmit.emit(this.search.value);
}
