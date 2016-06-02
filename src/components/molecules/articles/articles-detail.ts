import {Component, Input} from '@angular/core';

@Component({
    selector: 'x-articles-detail',
    template: `
        <h2>{{article.name}}</h2>
        <p>{{article.content}}</p>
    `
})
export class XArticlesDetailComponent {
    @Input() private article;

    constructor() {}
}
