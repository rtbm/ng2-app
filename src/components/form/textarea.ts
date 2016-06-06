import { Input, Component } from '@angular/core';
import { NgFormControl } from '@angular/common';

@Component({
  selector: 'x-textarea',
  template: `
    <textarea [ngFormControl]="formControl"
              [attr.placeholder]="placeholder"></textarea>
  `,
  styles: [`
    textarea {
      border: 1px solid #d9d9d9;
      padding: 1rem;
      outline: 0;
    }
    textarea:focus {
      border: 1px solid #111;
    }
  `],
})
export class XTextareaComponent {
  @Input() placeholder: string = '';
  @Input() formControl: NgFormControl;
}
