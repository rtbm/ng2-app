import {Component} from "@angular/core";
import {select} from 'ng2-redux';
import {Observable} from 'rxjs';
import {XArticlesListComponent} from "../../molecules/articles/articles-list";

@Component({
  selector: 'x-articles-list-page',
  directives: [XArticlesListComponent],
  template: `
    <h1>Articles list</h1>
    <x-articles-list [articles]="articles"></x-articles-list>
  `
})
export class XArticlesListPageComponent {
  @select(n => n.articles.get('articles')) private articles$: Observable<boolean>;

  private articles: Array<Object> = [];

  constructor() {
    this.articles$.subscribe((articles: any) => { this.articles = articles.toJS(); })
  }
}
