import {Injectable} from '@angular/core';
import {ServerService} from './server';

interface Article {
  name: string;
  content: string;
}

@Injectable()
export class ArticlesService {
  constructor(private serverService: ServerService) {}

  fetchAll() {
    return new Promise((resolve, reject) => {
      this.serverService.get('/articles')
        .subscribe(
          articles => resolve(articles),
          err => reject()
        );
    });
  }

  save(article: Article) {
    return new Promise((resolve, reject) => {
      this.serverService.post('/articles', article)
        .subscribe(
          article => resolve(article),
          err => reject(article)
        );
    });
  }
}
