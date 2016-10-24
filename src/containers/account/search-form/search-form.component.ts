import { Component, Input } from '@angular/core';

@Component({
  selector: 'x-search',
  template: require('./search.component.html'),
  styles: [require('./search.component.scss')],
})
export class XSearchComponent {
  @Input() private form;
  @Input() private search;
}
