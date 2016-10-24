import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'x-file',
  template: require('./file.component.html'),
  styles: [require('./file.component.scss')],
})
export class XFileComponent {
  @Input() private name;
  @Output() private onChange = new EventEmitter();

  convertToBase64(e: any) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', () => this.onChange.emit(reader.result), false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }
}
