import {Component} from "@angular/core";
import {select} from 'ng2-redux';
import {Observable} from 'rxjs';
import {XArticlesListComponent} from "../../molecules/articles/articles-list";
import {XWrapperComponent} from '../../atoms/wrapper';

@Component({
  selector: 'x-articles-list-page',
  directives: [XArticlesListComponent, XWrapperComponent],
  template: `
    <x-wrapper>
      <h1>Articles list</h1>
      <x-articles-list [articles]="articles"></x-articles-list>
    </x-wrapper>
  `
})
export class XArticlesListPageComponent {
  @select(n => n.articles.get('articles')) private articles$: Observable<boolean>;

  private articles: Array<Object> = [];

  constructor() {
    this.articles$.subscribe((articles: any) => { this.articles = articles.toJS(); })
  }
}
