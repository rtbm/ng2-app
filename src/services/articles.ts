import {Injectable} from '@angular/core';
import {ServerService} from './server';

interface Article {
  name: string;
  content: string;
}

@Injectable()
export class ArticlesService {
  constructor(private serverService: ServerService) {}

  save(article: Article) {
    return new Promise((resolve, reject) => {
      this.serverService.post('/articles', article)
        .subscribe(
          token => resolve(token),
          err => reject(article)
        );
    })
  }
}
