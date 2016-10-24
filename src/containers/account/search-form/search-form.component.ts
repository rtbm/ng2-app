import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'qt-search-form',
  template: require('./search-form.component.html'),
  styles: [require('./search-form.component.scss')],
})
export class QtSearchFormComponent {
  private form: FormGroup;
  private search: FormControl = new FormControl('');

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      _id: this.search,
    });
  }
}
