import { Component, Input } from '@angular/core';

@Component({
  selector: 'x-articles-detail',
  template: `
    <h1>{{article.name}}</h1>
    <p>{{article.content}}</p>
  `,
})
export class XArticlesDetailComponent {
  @Input() private article;

  constructor() {
  }
}
