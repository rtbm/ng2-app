import { Component, Input } from '@angular/core';

@Component({
  selector: 'x-articles-detail',
  template: require('./articles-detail.component.html'),
})

export class XArticlesDetailComponent {
  @Input() private article;

  constructor() {
  }
}
