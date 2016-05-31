import {Component} from "@angular/core";
import {AsyncPipe} from "@angular/common";
import {select} from "ng2-redux";
import {Observable} from "rxjs";
import {ArticleActions} from "../../../actions/article";
import {OnActivate, RouteSegment} from "@angular/router";
import {XArticleDetailComponent} from "../../molecules/articles/article-detail";

@Component({
    selector: 'x-article-detail-page',
    directives: [XArticleDetailComponent],
    pipes: [AsyncPipe],
    template: `
    <div>isError: {{isError$ | async}}</div>
    <div>isPending: {{isPending$ | async}}</div>
    <div>isSuccess: {{isSuccess$ | async}}</div>      
    <x-article-detail [article]="article"></x-article-detail>
  `
})
export class XArticleDetailPageComponent implements OnActivate {
    @select(n => n.article.get('isError')) private isError$: Observable<boolean>;
    @select(n => n.article.get('isPending')) private isPending$: Observable<boolean>;
    @select(n => n.article.get('isSuccess')) private isSuccess$: Observable<boolean>;
    @select(n => n.article.get('article')) private article$: Observable<Object>;

    private _id: string;
    private article: Object;

    constructor(private articleActions: ArticleActions) {
        this.article$.subscribe((article:any) => {
            this.article = article.toJS();
        });
    }

    routerOnActivate(curr: RouteSegment) {
        this._id = curr.getParam('_id');
        this.articleActions.read(this._id);
    }

    handleSubmit(article) {
        this.articleActions.update(article, this._id);
    }
}
