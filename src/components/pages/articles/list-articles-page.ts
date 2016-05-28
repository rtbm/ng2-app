import {Component} from "@angular/core";
import {XArticlesListComponent} from "../../molecules/articles-list";

@Component({
  selector: 'x-update-article-page',
  directives: [XArticlesListComponent],
  template: `
    <h1>Articles list</h1>
    <x-articles-list></x-articles-list>
  `
})
export class XListArticlesPageComponent {
}
