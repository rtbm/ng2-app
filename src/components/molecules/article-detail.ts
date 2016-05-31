import {Component, Input} from '@angular/core';

@Component({
    selector: 'x-article-detail',
    template: `
        <h2>{{article.name}}</h2>
        <p>{{article.content}}</p>
    `
})
export class XArticleDetailComponent {
    @Input() private article;

    constructor() {}
}
